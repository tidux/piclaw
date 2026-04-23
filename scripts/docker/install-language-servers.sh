#!/usr/bin/env bash
set -euo pipefail

MANIFEST_PATH="${1:-/tmp/language-servers.json}"
WORKSPACE_DIR="${WORKSPACE_DIR:-/workspace}"
WORKSPACE_LOCAL_DIR="${WORKSPACE_LOCAL_DIR:-${WORKSPACE_DIR}/.local}"
WORKSPACE_BIN_DIR="${WORKSPACE_BIN_DIR:-${WORKSPACE_LOCAL_DIR}/bin}"
WORKSPACE_TOOL_DIR="${WORKSPACE_TOOL_DIR:-${WORKSPACE_LOCAL_DIR}/share/piclaw/language-servers}"

mkdir -p "${WORKSPACE_BIN_DIR}" "${WORKSPACE_TOOL_DIR}"
export PATH="${WORKSPACE_BIN_DIR}:/home/linuxbrew/.linuxbrew/bin:/usr/local/go/bin:/usr/local/cargo/bin:${PATH}"

require_command() {
  local command_name="$1"
  if ! command -v "${command_name}" >/dev/null 2>&1; then
    echo "Missing required command: ${command_name}" >&2
    exit 1
  fi
}

require_command bun
require_command jq

find_brew() {
  if command -v brew >/dev/null 2>&1; then
    command -v brew
    return
  fi
  if [ -x /home/linuxbrew/.linuxbrew/bin/brew ]; then
    printf '%s\n' /home/linuxbrew/.linuxbrew/bin/brew
  fi
}

patch_bun_wrapper() {
  local wrapper_path="$1"
  if [ -f "${wrapper_path}" ] && head -n 1 "${wrapper_path}" | grep -q 'env node'; then
    sed -i '1s/env node/env bun/' "${wrapper_path}"
  fi
}

install_npm_global() {
  local server_json="$1"
  local id binary install_dir package_json
  local packages=()

  id="$(jq -r '.id' <<<"${server_json}")"
  binary="$(jq -r '.install.binary' <<<"${server_json}")"
  install_dir="${WORKSPACE_TOOL_DIR}/${id}"
  package_json="${install_dir}/package.json"

  mkdir -p "${install_dir}"
  if [ ! -f "${package_json}" ]; then
    cat > "${package_json}" <<EOF
{
  "name": "piclaw-lsp-${id}",
  "private": true
}
EOF
  fi

  mapfile -t packages < <(jq -r '.install.packages[]' <<<"${server_json}")
  (
    cd "${install_dir}"
    bun add --exact "${packages[@]}"
  )
  patch_bun_wrapper "${install_dir}/node_modules/.bin/${binary}"
  ln -sf "${install_dir}/node_modules/.bin/${binary}" "${WORKSPACE_BIN_DIR}/${binary}"
}

install_go_package() {
  local server_json="$1"
  local pkg
  require_command go
  pkg="$(jq -r '.install.packages[0]' <<<"${server_json}")"
  GOBIN="${WORKSPACE_BIN_DIR}" go install "${pkg}"
}

install_system_copy() {
  local server_json="$1"
  local binary source_path

  binary="$(jq -r '.install.binary' <<<"${server_json}")"
  source_path="$(command -v "${binary}")"
  if [ -z "${source_path}" ]; then
    echo "Missing system language server binary: ${binary}" >&2
    exit 1
  fi
  cp "${source_path}" "${WORKSPACE_BIN_DIR}/${binary}"
  chmod +x "${WORKSPACE_BIN_DIR}/${binary}"
}

install_brew_formula_if_available() {
  local server_json="$1"
  local brew_cmd formula binary source_path

  brew_cmd="$(find_brew || true)"
  [ -n "${brew_cmd}" ] || return 1

  formula="$(jq -r '.install.brewFormula // ""' <<<"${server_json}")"
  [ -n "${formula}" ] || return 1

  binary="$(jq -r '.install.binary' <<<"${server_json}")"
  "${brew_cmd}" list --versions "${formula}" >/dev/null 2>&1 || "${brew_cmd}" install "${formula}"

  source_path="$(PATH="$(dirname "${brew_cmd}"):${PATH}" command -v "${binary}" || true)"
  if [ -z "${source_path}" ]; then
    echo "Homebrew formula ${formula} did not provide expected binary: ${binary}" >&2
    return 1
  fi
  ln -sf "${source_path}" "${WORKSPACE_BIN_DIR}/${binary}"
  patch_bun_wrapper "${source_path}"
}

jq -c '.servers[]' "${MANIFEST_PATH}" | while read -r server; do
  if install_brew_formula_if_available "${server}"; then
    continue
  fi

  strategy="$(jq -r '.install.strategy' <<<"${server}")"
  case "${strategy}" in
    npm-global)
      install_npm_global "${server}"
      ;;
    go-install)
      install_go_package "${server}"
      ;;
    cargo-binstall)
      echo "Unsupported install strategy in Docker image: ${strategy}" >&2
      exit 1
      ;;
    system-copy)
      install_system_copy "${server}"
      ;;
    *)
      echo "Unsupported install strategy: ${strategy}" >&2
      exit 1
      ;;
  esac
done

chmod -R a+rX "${WORKSPACE_LOCAL_DIR}" 2>/dev/null || true

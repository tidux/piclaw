export {
  applyLiveSshConfig,
  clearLiveSshConfig,
  createChatSshCoreExtension,
  createSshCoreExtension,
  hasLiveChatSshSession,
  parseSshFlag,
  parseSshPort,
  parseStrictHostKeyCheckingMode,
  registerLiveChatSshSession,
  resolveRemoteTarget,
  resolveSshCoreConfigFromChatConfig,
  setSshConnectionResolverForTests,
  unregisterLiveChatSshSession,
  type SshCoreResolvedConfig,
  type SshStrictHostKeyCheckingMode,
} from "../../../src/extensions/ssh-core.js";

import sshCoreExtension from "../../../src/extensions/ssh-core.js";

export default sshCoreExtension;

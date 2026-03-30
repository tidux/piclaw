import { expect, test } from 'bun:test';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  buildEmbeddedDrawioAppUrl,
  getDrawioVendorDirCandidates,
  isBinaryDrawioSaveTarget,
  resolveDrawioSavePath,
  resolveDrawioVendorDir,
} from '../../extensions/viewers/drawio-editor/index.ts';

function withTempDir(run: (root: string) => void) {
  const root = mkdtempSync(join(tmpdir(), 'piclaw-drawio-vendor-'));
  try {
    run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

test('getDrawioVendorDirCandidates includes packaged and workspace fallback locations', () => {
  const candidates = getDrawioVendorDirCandidates('/pkg/ext', '/workspace');
  expect(candidates).toEqual([
    '/pkg/ext/vendor',
    '/workspace/runtime/extensions/viewers/drawio-editor/vendor',
    '/workspace/piclaw/runtime/extensions/viewers/drawio-editor/vendor',
    '/workspace/generated/cache/vendor/drawio/v29.6.1',
    '/workspace/piclaw/generated/cache/vendor/drawio/v29.6.1',
  ]);
});

test('resolveDrawioVendorDir falls back to workspace source vendor when packaged vendor is missing', () => {
  withTempDir((root) => {
    const baseDir = join(root, 'pkg', 'runtime', 'extensions', 'viewers', 'drawio-editor');
    const workspaceVendor = join(root, 'workspace', 'piclaw', 'runtime', 'extensions', 'viewers', 'drawio-editor', 'vendor');
    mkdirSync(workspaceVendor, { recursive: true });
    writeFileSync(join(workspaceVendor, 'index.html'), '<html></html>');

    expect(resolveDrawioVendorDir(baseDir, join(root, 'workspace'))).toBe(workspaceVendor);
  });
});

test('buildEmbeddedDrawioAppUrl matches the prior editor route with save/exit chrome disabled', () => {
  expect(buildEmbeddedDrawioAppUrl(false)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=0');
  expect(buildEmbeddedDrawioAppUrl(true)).toBe('/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=1');
  expect(buildEmbeddedDrawioAppUrl(true, true)).toContain('chrome=0');
});

test('drawio save helpers map JPEG exports to binary jpg targets', () => {
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'image/jpeg', 'foo.jpeg')).toBe('/workspace/foo.jpg');
  expect(resolveDrawioSavePath('/workspace/foo.drawio', 'image/jpg', 'foo.jpg')).toBe('/workspace/foo.jpg');
  expect(isBinaryDrawioSaveTarget('/workspace/foo.jpg', 'xml', 'image/jpeg')).toBe(true);
  expect(isBinaryDrawioSaveTarget('/workspace/foo.jpeg', 'jpeg', 'image/jpeg')).toBe(true);
  expect(isBinaryDrawioSaveTarget('/workspace/foo.drawio', 'xml', 'application/xml')).toBe(false);
});

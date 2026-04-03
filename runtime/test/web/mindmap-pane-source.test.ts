import { expect, test } from 'bun:test';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const MINDMAP_PANE_SOURCE = resolve(import.meta.dir, '../../web/src/panes/mindmap-pane.ts');
const MINDMAP_EDITOR_SOURCE = resolve(import.meta.dir, '../../web/src/vendor/mindmap-editor-source.ts');

test('mindmap pane chrome includes undo/redo buttons and cache-busted stylesheet loading', () => {
  const source = readFileSync(MINDMAP_PANE_SOURCE, 'utf8');

  expect(source).toContain('id="mindmap-undo"');
  expect(source).toContain('id="mindmap-redo"');
  expect(source).toContain("const baseHref = href.split('?')[0];");
  expect(source).toContain("ensureStylesheet('/static/css/mindmap.css?v=' + VENDOR_CACHE_BUST);");
});

test('mindmap editor source wires undo/redo controls and shortcuts', () => {
  const source = readFileSync(MINDMAP_EDITOR_SOURCE, 'utf8');

  expect(source).toContain("document.getElementById('mindmap-undo')?.addEventListener('click', applyUndo);");
  expect(source).toContain("document.getElementById('mindmap-redo')?.addEventListener('click', applyRedo);");
  expect(source).toContain("const nextLayout = layoutSelect.value as MindmapDocument['layout'];");
  expect(source).toContain("mindmapData.layout = nextLayout;");
  expect(source).toContain("clearStoredNodePositions(mindmapData.root);");
  expect(source).toContain("updateHistoryControls();");
  expect(source).toContain("setTimeout(fitToView, 0);");
  expect(source).toContain("nodeData.id === selectedNodeId ? 'var(--node-selected-fg)' : 'var(--node-fg)'");
  expect(source).toContain("case 'z':");
  expect(source).toContain("case 'y':");
});

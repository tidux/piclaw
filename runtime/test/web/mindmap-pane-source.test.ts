import { expect, test } from 'bun:test';
import { readFileSync } from 'fs';
import { join } from 'path';

test('mindmap pane chrome includes undo/redo buttons', () => {
  const source = readFileSync(
    join(process.cwd(), 'runtime', 'web', 'src', 'panes', 'mindmap-pane.ts'),
    'utf8',
  );

  expect(source).toContain('id="mindmap-undo"');
  expect(source).toContain('id="mindmap-redo"');
});

test('mindmap editor source wires undo/redo controls and shortcuts', () => {
  const source = readFileSync(
    join(process.cwd(), 'runtime', 'web', 'src', 'vendor', 'mindmap-editor-source.ts'),
    'utf8',
  );

  expect(source).toContain("document.getElementById('mindmap-undo')?.addEventListener('click', applyUndo);");
  expect(source).toContain("document.getElementById('mindmap-redo')?.addEventListener('click', applyRedo);");
  expect(source).toContain("case 'z':");
  expect(source).toContain("case 'y':");
});

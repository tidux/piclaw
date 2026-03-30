import { expect, test } from 'bun:test';

import {
  cloneMindmapHistoryDocument,
  recordMindmapHistory,
  redoMindmapHistory,
  undoMindmapHistory,
} from '../../web/src/vendor/mindmap-history.js';

const initialDoc = {
  version: 1,
  layout: 'horizontal-tree',
  root: {
    id: 'root',
    text: 'Root',
    children: [{ id: 'a', text: 'Alpha', children: [] }],
  },
  links: [],
};

test('cloneMindmapHistoryDocument deep clones plain documents', () => {
  const clone = cloneMindmapHistoryDocument(initialDoc);
  expect(clone).toEqual(initialDoc);
  expect(clone).not.toBe(initialDoc);
  expect(clone.root).not.toBe(initialDoc.root);
  expect(clone.root.children[0]).not.toBe(initialDoc.root.children[0]);
});

test('record/undo/redo mindmap history round-trips document snapshots', () => {
  const state = recordMindmapHistory({ undoStack: [], redoStack: [] }, initialDoc, 'Added child node');
  expect(state.undoStack.length).toBe(1);
  expect(state.redoStack.length).toBe(0);

  const currentDoc = {
    ...initialDoc,
    root: {
      ...initialDoc.root,
      children: [...initialDoc.root.children, { id: 'b', text: 'Beta', children: [] }],
    },
  };

  const undone = undoMindmapHistory(state, currentDoc);
  expect(undone.restored).toEqual(initialDoc);
  expect(undone.undoStack.length).toBe(0);
  expect(undone.redoStack.length).toBe(1);

  const redone = redoMindmapHistory({ undoStack: undone.undoStack, redoStack: undone.redoStack }, initialDoc);
  expect(redone.restored).toEqual(currentDoc);
  expect(redone.undoStack.length).toBe(1);
  expect(redone.redoStack.length).toBe(0);
});

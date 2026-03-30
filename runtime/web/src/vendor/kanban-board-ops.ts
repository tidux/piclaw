export interface KanbanCardData {
  id: string;
  title: string;
  checked: boolean;
  checkChar: string;
}

export interface KanbanLaneData {
  id: string;
  title: string;
  cards: KanbanCardData[];
  collapsed?: boolean;
}

export interface KanbanBoardData {
  lanes: KanbanLaneData[];
  archive: KanbanCardData[];
  settings: Record<string, any>;
}

export interface MoveCardParams {
  cardId: string;
  fromLaneId: string;
  toLaneId: string;
}

export interface MoveLaneParams {
  fromLaneId: string;
  toLaneId: string;
}

export function moveCardInBoard(board: KanbanBoardData, params: MoveCardParams): KanbanBoardData {
  if (!board || params.fromLaneId === params.toLaneId) return board;

  const fromLane = board.lanes.find((lane) => lane.id === params.fromLaneId);
  const toLane = board.lanes.find((lane) => lane.id === params.toLaneId);
  if (!fromLane || !toLane) return board;

  const card = fromLane.cards.find((entry) => entry.id === params.cardId);
  if (!card) return board;

  return {
    ...board,
    lanes: board.lanes.map((lane) => {
      if (lane.id === params.fromLaneId) {
        return { ...lane, cards: lane.cards.filter((entry) => entry.id !== params.cardId) };
      }
      if (lane.id === params.toLaneId) {
        return { ...lane, cards: [...lane.cards.filter((entry) => entry.id !== params.cardId), card] };
      }
      return lane;
    }),
  };
}

export function moveLaneInBoard(board: KanbanBoardData, params: MoveLaneParams): KanbanBoardData {
  if (!board || params.fromLaneId === params.toLaneId) return board;

  const fromIndex = board.lanes.findIndex((lane) => lane.id === params.fromLaneId);
  const toIndex = board.lanes.findIndex((lane) => lane.id === params.toLaneId);
  if (fromIndex === -1 || toIndex === -1) return board;

  const nextLanes = [...board.lanes];
  const [moved] = nextLanes.splice(fromIndex, 1);
  if (!moved) return board;
  nextLanes.splice(toIndex, 0, moved);
  return { ...board, lanes: nextLanes };
}

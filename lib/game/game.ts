import Board from './board';
import {P_POSITIONS, applyTransformations} from './boardValueMaping';
import {
  BOARD_COL_SIZE,
  BOARD_ROW_SIZE,
  BoardMove,
  NO_OF_BOARDS,
} from './definitions';
import {randomNumber} from './helper';

export function createEmptyBoard(): Board[] {
  return Array(NO_OF_BOARDS)
    .fill(0)
    .map(() => new Board());
}

export function makeMove(move: BoardMove, boards: Board[]) {
  const boardsClone = boards.map(board => board.clone());
  const {boardIndex, x, y} = move;
  boardsClone[boardIndex].markAtPos(x, y);
  return boardsClone;
}

export function cloneBoards(boards: Board[]) {
  return boards.map(board => board.clone());
}

export function totalBoardValue(boards: Board[]) {
  const val = boards.reduce((v, board) => v * board.boardValue(), 1);
  return applyTransformations(val);
}

export function boardSize() {
  return BOARD_COL_SIZE * BOARD_ROW_SIZE;
}

export function boardIndexFromPosition(pos: number): number {
  return Math.floor(pos / boardSize());
}

export function xFromPosition(pos: number): number {
  return pos % BOARD_ROW_SIZE;
}

export function yFromPosition(pos: number): number {
  return Math.floor(pos / BOARD_COL_SIZE) % BOARD_COL_SIZE;
}

export function findNextMove(boards: Board[]): BoardMove {
  const newBoards = cloneBoards(boards);
  const randomStart = randomNumber();
  let possibleMove: BoardMove | undefined;
  let position = randomStart;
  while (true) {
    let boardIndex = boardIndexFromPosition(position);
    let x = xFromPosition(position);
    let y = yFromPosition(position);
    if (newBoards[boardIndex].isMovePossible(x, y)) {
      possibleMove = {boardIndex, x, y};
      newBoards[boardIndex].markAtPos(x, y);
      if (P_POSITIONS.includes(totalBoardValue(newBoards))) {
        return possibleMove;
      }
      newBoards[boardIndex].clearAtPos(x, y);
    }
    position = (position + 1) % (NO_OF_BOARDS * boardSize());
    if (randomStart === position) {
      break;
    }
  }
  if (!possibleMove) {
    throw new Error('Could not find any possible move');
  }
  return possibleMove;
}

import Board, {
  BOARD_COL_SIZE,
  BOARD_ROW_SIZE,
  MARKER_CHAR,
  MisereQuotient,
} from './board';
import {BOARD_CONFIG_TEST_DATA, DEAD_BOARD_TEST_DATA} from './boardTestData';

function xPosition(idx: number): number {
  return idx % BOARD_ROW_SIZE;
}

function yPosition(idx: number): number {
  return Math.floor(idx / BOARD_COL_SIZE);
}

function markBoardWithConfig(board: Board, config: string[][]) {
  board.clear();
  if (
    config.length !== BOARD_COL_SIZE ||
    config.some(cfg => cfg.length !== BOARD_ROW_SIZE)
  ) {
    throw new Error('Invalid config');
  }
  config.flat().forEach((val, i) => {
    if (val === MARKER_CHAR) {
      board.markAtPos(xPosition(i), yPosition(i));
    }
  });
}

describe('Board', () => {
  test('board constructor works', async () => {
    let board = new Board();
    expect(board.items.length).toBe(BOARD_COL_SIZE);
    expect(board.items[0].length).toBe(BOARD_ROW_SIZE);
    expect(board.items.flat().every(v => v === '')).toBe(true);
  });

  test('clear works', async () => {
    let board = new Board();
    board.markAtPos(0, 0);
    board.markAtPos(1, 1);
    board.markAtPos(2, 2);
    expect(board.items.flat().every(v => v === '')).toBe(false);
    board.clear();
    expect(board.items.length).toBe(BOARD_COL_SIZE);
    expect(board.items[0].length).toBe(BOARD_ROW_SIZE);
  });

  test('markAtPos works', async () => {
    let board = new Board();
    board.markAtPos(0, 0);
    expect(board.items.flat()[0]).toBe(MARKER_CHAR);
    board.markAtPos(1, 2);
    expect(board.items.flat()[7]).toBe(MARKER_CHAR);
    expect(() => board.markAtPos(-1, 0)).toThrow('Invalid x');
    expect(() => board.markAtPos(0, -1)).toThrow('Invalid y');
    expect(() => board.markAtPos(0, 3)).toThrow('Invalid y');
    expect(() => board.markAtPos(3, 1)).toThrow('Invalid x');
  });

  test('empty board', async () => {
    let board = new Board();
    expect(board.boardValue()).toBe(MisereQuotient.c);
    expect(board.isDead()).toBe(false);
  });

  test('board with 1X', async () => {
    const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const board = new Board();
    indexes.forEach(i => {
      board.clear();
      board.markAtPos(xPosition(i), yPosition(i));
      expect(board.isDead()).toBe(false);
      if (i === 0 || i === 2 || i === 6 || i === 8) {
        expect(board.boardValue()).toBe(MisereQuotient.one);
      } else if (i === 1 || i === 3 || i === 5 || i === 7) {
        expect(board.boardValue()).toBe(MisereQuotient.one);
      } else if (i === 4) {
        expect(board.boardValue()).toBe(MisereQuotient.c * MisereQuotient.c);
      }
    });
  });
  test('board with configTestData', async () => {
    const board = new Board();
    BOARD_CONFIG_TEST_DATA.forEach(cfg => {
      board.clear();
      markBoardWithConfig(board, cfg.config);
      expect(board.isDead()).toBe(false);
      if (board.boardValue() !== cfg.value) {
        console.log(cfg.config, cfg.value);
      }
      expect(board.boardValue()).toBe(cfg.value);
    });
  });
  test('dead board', async () => {
    const board = new Board();
    DEAD_BOARD_TEST_DATA.forEach(cfg => {
      board.clear();
      markBoardWithConfig(board, cfg.config);
      expect(board.isDead()).toBe(true);
      expect(board.boardValue()).toBe(cfg.value);
    });
  });

  test('marking on dead board throws error', async () => {
    const board = new Board();
    markBoardWithConfig(board, DEAD_BOARD_TEST_DATA[0].config);
    expect(() => board.markAtPos(2, 2)).toThrow('Dead board');
  });
});

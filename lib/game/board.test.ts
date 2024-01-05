import Board from './board';
import {BOARD_CONFIG_TEST_DATA, DEAD_BOARD_TEST_DATA} from './boardTestData';
import {applyTransformations, findInValueMapping} from './boardValueMaping';
import {
  BOARD_COL_SIZE,
  BOARD_ROW_SIZE,
  MARKER_CHAR,
  MisereQuotient,
} from './definitions';

function xPosition(idx: number): number {
  return idx % BOARD_ROW_SIZE;
}

function yPosition(idx: number): number {
  return Math.floor(idx / BOARD_COL_SIZE);
}

function getPossiblePositions(count: number) {
  const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const subsets: number[][] = [];
  if (count < 1 || count > positions.length) {
    return subsets;
  }
  const smallerSet = positions.map((v, idx) => ({e: [v], i: idx}));
  while (smallerSet.length > 0) {
    const elem = smallerSet.pop();
    if (!elem) {
      continue;
    }
    if (elem.e.length === count) {
      subsets.push(elem.e);
      continue;
    }
    let i = elem.i + 1;
    while (i < positions.length) {
      const e = [...elem.e, positions[i]];
      smallerSet.push({e, i});
      i += 1;
    }
  }

  return subsets;
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

  test('cleatAtPos works', async () => {
    let board = new Board();
    board.markAtPos(0, 0);
    expect(board.items.flat()[0]).toBe(MARKER_CHAR);
    board.clearAtPos(0, 0);
    expect(board.items.flat()[0]).toBe('');
    expect(() => board.clearAtPos(-1, 0)).toThrow('Invalid x');
    expect(() => board.clearAtPos(0, -1)).toThrow('Invalid y');
    expect(() => board.clearAtPos(0, 3)).toThrow('Invalid y');
    expect(() => board.clearAtPos(3, 1)).toThrow('Invalid x');
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

  test('test board value for all possible positions', async () => {
    const board = new Board();
    const marKBoard = (pos: number) => {
      if (!board.isDead()) {
        board.markAtPos(xPosition(pos), yPosition(pos));
      }
    };
    [1, 2, 3, 4, 5, 6].forEach(count => {
      const positions = getPossiblePositions(count);
      board.clear();
      positions.forEach(p => {
        p.forEach(marKBoard);
        expect(board.boardValue()).toBeGreaterThan(0);
      });
    });
  });

  test('clone board', async () => {
    const board1 = new Board();
    board1.markAtPos(0, 0);
    board1.markAtPos(0, 2);
    board1.markAtPos(2, 2);
    const board2 = board1.clone();
    expect(board1.boardValue()).toBe(board2.boardValue());
    board2.markAtPos(0, 1);
    expect(board1.boardValue()).not.toBe(board2.boardValue());
  });

  test('findInValueMapping throws', async () => {
    expect(() => findInValueMapping(new Board().items)).toThrow();
  });

  test('applyTransformations', async () => {
    const d2 = MisereQuotient.d * MisereQuotient.d;
    const c2 = MisereQuotient.c * MisereQuotient.c;
    const cd = MisereQuotient.c * MisereQuotient.d;
    const ad = MisereQuotient.a * MisereQuotient.d;
    const b2d = MisereQuotient.b * MisereQuotient.b * MisereQuotient.d;
    const d = MisereQuotient.d;
    const c3 = MisereQuotient.c * MisereQuotient.c * MisereQuotient.c;
    const ac2 = MisereQuotient.a * MisereQuotient.c * MisereQuotient.c;
    const b2c = MisereQuotient.b * MisereQuotient.b * MisereQuotient.c;
    const c = MisereQuotient.c;
    const b3 = MisereQuotient.b * MisereQuotient.b * MisereQuotient.b;
    const b = MisereQuotient.b;
    const a2 = MisereQuotient.a * MisereQuotient.a;
    const one = MisereQuotient.one;

    expect(applyTransformations(d2)).toBe(c2);
    expect(applyTransformations(cd)).toBe(ad);
    expect(applyTransformations(b2d)).toBe(d);
    expect(applyTransformations(c3)).toBe(ac2);
    expect(applyTransformations(b2c)).toBe(c);
    expect(applyTransformations(b3)).toBe(b);
    expect(applyTransformations(a2)).toBe(one);
    expect(applyTransformations(d2 * d2 * b2c * b2c)).toBe(c2);
  });
});

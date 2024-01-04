import Board, {BOARD_COL_SIZE, BOARD_ROW_SIZE, MARKER_CHAR} from './board';

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

  test('isDead works', async () => {
    let board = new Board();
    expect(board.isDead()).toBe(false);
    board.markAtPos(0, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(2, 0);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(0, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(2, 1);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(0, 2);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 2);
    expect(board.isDead()).toBe(false);
    board.markAtPos(2, 2);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(0, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(0, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(0, 2);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(1, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 2);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(2, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(2, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(2, 2);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(0, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(2, 2);
    expect(board.isDead()).toBe(true);

    board.clear();
    board.markAtPos(2, 0);
    expect(board.isDead()).toBe(false);
    board.markAtPos(1, 1);
    expect(board.isDead()).toBe(false);
    board.markAtPos(0, 2);
    expect(board.isDead()).toBe(true);
  });
});

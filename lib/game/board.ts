import {
  BOARD_COL_SIZE,
  BOARD_ROW_SIZE,
  MARKER_CHAR,
  MisereQuotient,
  findInValueMapping,
} from './boardValueMaping';

class Board {
  private _items: string[][];

  constructor() {
    this._items = this.emptyArray();
  }

  private emptyArray() {
    return Array(BOARD_COL_SIZE)
      .fill('')
      .map(() =>
        Array(BOARD_ROW_SIZE)
          .fill('')
          .map(() => ''),
      );
  }

  get items() {
    return this._items;
  }

  private clone() {
    let board = new Board();
    for (let y = 0; y < BOARD_COL_SIZE; y++) {
      for (let x = 0; x < BOARD_ROW_SIZE; x++) {
        board._items[y][x] = this._items[y][x];
      }
    }
  }

  public boardValue(): number {
    if (this.isDead()) {
      return MisereQuotient.one;
    }
    // empty board
    if (this.items.flat().filter(e => e === MARKER_CHAR).length === 0) {
      return MisereQuotient.c;
    }
    return findInValueMapping(this._items);
  }

  public markAtPos(x: number, y: number): void {
    if (x < 0 || x >= BOARD_ROW_SIZE) {
      throw new Error('Invalid x position value: ' + x);
    }
    if (y < 0 || y >= BOARD_COL_SIZE) {
      throw new Error('Invalid y position value: ' + y);
    }
    if (this.isDead()) {
      throw new Error('Dead board');
    }
    this._items[y][x] = MARKER_CHAR;
  }

  public clear(): void {
    this._items = this.emptyArray();
  }

  public isDead(): boolean {
    const items = this._items.flat();
    const deadBoardPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return deadBoardPositions.some(pos =>
      pos.every(i => items[i] === MARKER_CHAR),
    );
  }
}

export default Board;

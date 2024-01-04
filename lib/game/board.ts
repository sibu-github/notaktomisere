export const BOARD_ROW_SIZE = 3;
export const BOARD_COL_SIZE = 3;
export const MARKER_CHAR = 'X';

export enum MisereQuotient {
  'one' = 1,
  'a' = 2,
  'b' = 3,
  'c' = 5,
  'd' = 7,
}

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

  private boardValue1X() {
    const items = this._items.flat();
    const idx = items.findIndex(e => e === MARKER_CHAR);
    // Single X on corner
    if ([0, 2, 6, 8].includes(idx)) {
      return MisereQuotient.one;
    }
    // Single X on side
    if ([1, 3, 5, 7].includes(idx)) {
      return MisereQuotient.one;
    }
    // Single X on center
    return MisereQuotient.c * MisereQuotient.c;
  }

  private boardValue2X() {
    const items = this._items.flat();
    const idx1 = items.findIndex(e => e === MARKER_CHAR);
    const idx2 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx1);
    // adjacent on the side -> ab
    if (
      (idx1 === 0 && idx2 === 1) ||
      (idx1 === 1 && idx2 === 2) ||
      (idx1 === 0 && idx2 === 3) ||
      (idx1 === 2 && idx2 === 5) ||
      (idx1 === 3 && idx2 === 6) ||
      (idx1 === 5 && idx2 === 8) ||
      (idx1 === 6 && idx2 === 7) ||
      (idx1 === 7 && idx2 === 8)
    ) {
      return MisereQuotient.a * MisereQuotient.d;
    }
    // on the corners -> b
    if (
      (idx1 === 0 && idx2 === 2) ||
      (idx1 === 0 && idx2 === 6) ||
      (idx1 === 2 && idx2 === 8) ||
      (idx1 === 6 && idx2 === 8)
    ) {
      return MisereQuotient.b;
    }
    // center and corner -> b
    if (
      (idx1 === 0 && idx2 === 4) ||
      (idx1 === 2 && idx2 === 4) ||
      (idx1 === 4 && idx2 === 6) ||
      (idx1 === 4 && idx2 === 8)
    ) {
      return MisereQuotient.b;
    }
    // knight move away -> b
    if (
      (idx1 === 0 && idx2 === 5) ||
      (idx1 === 0 && idx2 === 7) ||
      (idx1 === 1 && idx2 === 6) ||
      (idx1 === 1 && idx2 === 8) ||
      (idx1 === 2 && idx2 === 3) ||
      (idx1 === 2 && idx2 === 7) ||
      (idx1 === 3 && idx2 === 8) ||
      (idx1 === 5 && idx2 === 6)
    ) {
      return MisereQuotient.b;
    }
    // opposite corners -> a
    if ((idx1 === 0 && idx2 === 8) || (idx1 === 2 && idx2 === 6)) {
      return MisereQuotient.a;
    }
    // on the sides -> a
    if (
      (idx1 === 1 && idx2 === 3) ||
      (idx1 === 1 && idx2 === 5) ||
      (idx1 === 1 && idx2 === 7) ||
      (idx1 === 3 && idx2 === 7) ||
      (idx1 === 5 && idx2 === 7) ||
      (idx1 === 3 && idx2 === 5)
    ) {
      return MisereQuotient.a;
    }
    // center and side -> b
    if (
      (idx1 === 1 && idx2 === 4) ||
      (idx1 === 3 && idx2 === 4) ||
      (idx1 === 4 && idx2 === 5) ||
      (idx1 === 4 && idx2 === 7)
    ) {
      return MisereQuotient.b;
    }
    throw new Error('Something messed up :(');
  }

  private boardValue3X() {
    const items = this._items.flat();
    const idx1 = items.findIndex(e => e === MARKER_CHAR);
    const idx2 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx1);
    const idx3 = items.findIndex(
      (e, i) => e === MARKER_CHAR && i > idx1 && i > idx2,
    );
    // corner and adjacent sides -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 3) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 5) ||
      (idx1 === 3 && idx2 === 6 && idx3 === 7) ||
      (idx1 === 5 && idx2 === 7 && idx3 === 8)
    ) {
      return MisereQuotient.b;
    }
    // corner-side-center -> ab
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 4) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 4) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 4) ||
      (idx1 === 3 && idx2 === 4 && idx3 === 6) ||
      (idx1 === 4 && idx2 === 6 && idx3 === 7) ||
      (idx1 === 4 && idx2 === 7 && idx3 === 8) ||
      (idx1 === 4 && idx2 === 5 && idx3 === 8) ||
      (idx1 === 2 && idx2 === 4 && idx3 === 5)
    ) {
      return MisereQuotient.a * MisereQuotient.b;
    }
    // two sides one adjacent corner -> d
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 5) ||
      (idx1 === 0 && idx2 === 1 && idx3 === 7) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 7) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 5) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 7) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 5) ||
      (idx1 === 2 && idx2 === 5 && idx3 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 6) ||
      (idx1 === 3 && idx2 === 5 && idx3 === 6) ||
      (idx1 === 1 && idx2 === 6 && idx3 === 7) ||
      (idx1 === 5 && idx2 === 6 && idx3 === 7) ||
      (idx1 === 1 && idx2 === 5 && idx3 === 8) ||
      (idx1 === 3 && idx2 === 5 && idx3 === 8) ||
      (idx1 === 1 && idx2 === 7 && idx3 === 8) ||
      (idx1 === 3 && idx2 === 7 && idx3 === 8)
    ) {
      return MisereQuotient.d;
    }
    // two adjacent corners one sides -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 6) ||
      (idx1 === 0 && idx2 === 5 && idx3 === 6) ||
      (idx1 === 0 && idx2 === 6 && idx3 === 7) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 7) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 5) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 8) ||
      (idx1 === 2 && idx2 === 7 && idx3 === 8) ||
      (idx1 === 1 && idx2 === 6 && idx3 === 8) ||
      (idx1 === 3 && idx2 === 6 && idx3 === 8) ||
      (idx1 === 5 && idx2 === 6 && idx3 === 8)
    ) {
      return MisereQuotient.a;
    }
    // two opposite corners one side -> d
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 8) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 8) ||
      (idx1 === 0 && idx2 === 7 && idx3 === 8) ||
      (idx1 === 0 && idx2 === 5 && idx3 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 6) ||
      (idx1 === 2 && idx2 === 5 && idx3 === 6) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 6) ||
      (idx1 === 2 && idx2 === 6 && idx3 === 7)
    ) {
      return MisereQuotient.d;
    }
    // two corner and center -> a
    if (
      (idx1 === 0 && idx2 === 2 && idx3 === 4) ||
      (idx1 === 0 && idx2 === 4 && idx3 === 6) ||
      (idx1 === 2 && idx2 === 4 && idx3 === 8) ||
      (idx1 === 4 && idx2 === 6 && idx3 === 8)
    ) {
      return MisereQuotient.a;
    }
    // three corners -> ab
    if (
      (idx1 === 0 && idx2 === 2 && idx3 === 6) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 8) ||
      (idx1 === 0 && idx2 === 6 && idx3 === 8) ||
      (idx1 === 2 && idx2 === 6 && idx3 === 8)
    ) {
      return MisereQuotient.a * MisereQuotient.b;
    }
    // center side opposite corner -> a
    if (
      (idx1 === 1 && idx2 === 4 && idx3 === 6) ||
      (idx1 === 1 && idx2 === 4 && idx3 === 8) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 4) ||
      (idx1 === 3 && idx2 === 4 && idx3 === 8) ||
      (idx1 === 0 && idx2 === 4 && idx3 === 5) ||
      (idx1 === 4 && idx2 === 5 && idx3 === 6) ||
      (idx1 === 0 && idx2 === 4 && idx3 === 7) ||
      (idx1 === 2 && idx2 === 4 && idx3 === 7)
    ) {
      return MisereQuotient.a;
    }
    // two side and opposite corner -> 1
    if (
      (idx1 === 1 && idx2 === 3 && idx3 === 8) ||
      (idx1 === 1 && idx2 === 5 && idx3 === 6) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 7) ||
      (idx1 === 0 && idx2 === 5 && idx3 === 7)
    ) {
      return MisereQuotient.one;
    }
    // two side and center -> ab
    if (
      (idx1 === 1 && idx2 === 3 && idx3 === 4) ||
      (idx1 === 1 && idx2 === 4 && idx3 === 5) ||
      (idx1 === 3 && idx2 === 4 && idx3 === 7) ||
      (idx1 === 4 && idx2 === 5 && idx3 === 7)
    ) {
      return MisereQuotient.a * MisereQuotient.b;
    }
    // three sides -> b
    if (
      (idx1 === 1 && idx2 === 3 && idx3 === 7) ||
      (idx1 === 1 && idx2 === 5 && idx3 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 5) ||
      (idx1 === 3 && idx2 === 5 && idx3 === 7)
    ) {
      return MisereQuotient.b;
    }

    throw new Error('Something messed up :(');
  }

  private boardValue4X(): number {
    const items = this._items.flat();
    const idx1 = items.findIndex(e => e === MARKER_CHAR);
    const idx2 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx1);
    const idx3 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx2);
    const idx4 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx3);
    // all 4 in one corner -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 4) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 4 && idx4 === 5) ||
      (idx1 === 3 && idx2 === 4 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 4 && idx2 === 5 && idx3 === 7 && idx4 === 8)
    ) {
      return MisereQuotient.a;
    }
    // 3 sides 1 corner -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 5) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 5) ||
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 3 && idx2 === 5 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 3 && idx2 === 5 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 5 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 5 && idx3 === 7 && idx4 === 8)
    ) {
      return MisereQuotient.a;
    }
    // 3 in a corner and opposite corner -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 5 && idx4 === 6) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 5 && idx3 === 7 && idx4 === 8)
    ) {
      return MisereQuotient.a;
    }
    // corner, center and adjacent two sides -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 4 && idx4 === 5) ||
      (idx1 === 4 && idx2 === 5 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 4 && idx4 === 6) ||
      (idx1 === 1 && idx2 === 4 && idx3 === 5 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 4) ||
      (idx1 === 3 && idx2 === 4 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 4 && idx4 === 7) ||
      (idx1 === 2 && idx2 === 4 && idx3 === 5 && idx4 === 7)
    ) {
      return MisereQuotient.b;
    }
    // adjacent corners, center and adjacent side -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 4 && idx4 === 6) ||
      (idx1 === 0 && idx2 === 4 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 4 && idx4 === 8) ||
      (idx1 === 2 && idx2 === 4 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 3 && idx2 === 4 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 4 && idx2 === 5 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 4) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 4 && idx4 === 5)
    ) {
      return MisereQuotient.b;
    }
    // 2 adjacent corner, oppositeside and adjacent side -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 5 && idx4 === 6) ||
      (idx1 === 0 && idx2 === 5 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 5 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 5 && idx4 === 7)
    ) {
      return MisereQuotient.b;
    }
    // 2 adjacent in a corner and other 2 sides -> ab
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 5 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 5 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 5 && idx4 === 6) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 5 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 5 && idx4 === 7) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 5 && idx4 === 7)
    ) {
      return MisereQuotient.a * MisereQuotient.b;
    }
    // 2 adjacent in a corner, 2 adjacent in a vertical corner -> ab
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 5 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 6) ||
      (idx1 === 2 && idx2 === 5 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 7 && idx4 === 8)
    ) {
      return MisereQuotient.a * MisereQuotient.b;
    }
    // corner side adjacent pair, corners are adjacent -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 3 && idx2 === 5 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 6)
    ) {
      return MisereQuotient.b;
    }
    // 3 corners and one adjacent side -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 5 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 5 && idx4 === 6) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 8) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 6 && idx4 === 8)
    ) {
      return MisereQuotient.b;
    }
    // 2 adjacent in opposite corners -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 7 && idx4 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 6 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 5 && idx4 === 8) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 5 && idx4 === 6)
    ) {
      return MisereQuotient.a;
    }
    // center, side, opposite 2 corners -> b
    if (
      (idx1 === 1 && idx2 === 4 && idx3 === 6 && idx4 === 8) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 4 && idx4 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 4 && idx4 === 7) ||
      (idx1 === 0 && idx2 === 4 && idx3 === 5 && idx4 === 6)
    ) {
      return MisereQuotient.b;
    }
    // 4 corners -> a
    if (idx1 === 0 && idx2 === 2 && idx3 === 6 && idx4 === 8) {
      return MisereQuotient.a;
    }
    // center 2 sides opposite corner -> b
    if (
      (idx1 === 0 && idx2 === 4 && idx3 === 5 && idx4 === 7) ||
      (idx1 === 1 && idx2 === 4 && idx3 === 5 && idx4 === 6) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 4 && idx4 === 8) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 4 && idx4 === 7)
    ) {
      return MisereQuotient.b;
    }
    // 4 sides -> a
    if (idx1 === 1 && idx2 === 3 && idx3 === 5 && idx4 === 7) {
      return MisereQuotient.a;
    }

    throw new Error('Something messed up :(');
  }

  private boardValue5X(): number {
    const items = this._items.flat();
    const idx1 = items.findIndex(e => e === MARKER_CHAR);
    const idx2 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx1);
    const idx3 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx2);
    const idx4 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx3);
    const idx5 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx4);
    // 4 sides one corner -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 5 && idx5 === 7) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 5 && idx5 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 5 && idx4 === 6 && idx5 === 7) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 5 && idx4 === 7 && idx5 === 8)
    ) {
      return MisereQuotient.b;
    }
    // 3 sides two opposite corners -> b
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 5 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 5 && idx5 === 6) ||
      (idx1 === 0 && idx2 === 3 && idx3 === 5 && idx4 === 7 && idx5 === 8) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 5 && idx4 === 6 && idx5 === 7) ||
      (idx1 === 0 && idx2 === 1 && idx3 === 3 && idx4 === 7 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 6 && idx5 === 7) ||
      (idx1 === 0 && idx2 === 1 && idx3 === 5 && idx4 === 7 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 5 && idx4 === 6 && idx5 === 7)
    ) {
      return MisereQuotient.b;
    }
    // center two sides two corners -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 4 && idx4 === 5 && idx5 === 6) ||
      (idx1 === 1 && idx2 === 4 && idx3 === 5 && idx4 === 6 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 4 && idx4 === 6 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 4 && idx5 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 4 && idx5 === 7) ||
      (idx1 === 2 && idx2 === 3 && idx3 === 4 && idx4 === 7 && idx5 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 4 && idx4 === 5 && idx5 === 7) ||
      (idx1 === 0 && idx2 === 4 && idx3 === 5 && idx4 === 6 && idx5 === 7)
    ) {
      return MisereQuotient.a;
    }
    // 3 sides 2 corners -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 5 && idx4 === 6 && idx5 === 7) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 7 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 3 && idx3 === 5 && idx4 === 6 && idx5 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 5 && idx5 === 7)
    ) {
      return MisereQuotient.a;
    }
    // 3 corners 2 sides -> a
    if (
      (idx1 === 0 && idx2 === 1 && idx3 === 5 && idx4 === 6 && idx5 === 8) ||
      (idx1 === 1 && idx2 === 2 && idx3 === 3 && idx4 === 6 && idx5 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 3 && idx4 === 7 && idx5 === 8) ||
      (idx1 === 0 && idx2 === 2 && idx3 === 5 && idx4 === 6 && idx5 === 7)
    ) {
      return MisereQuotient.a;
    }
    throw new Error('Something messed up :(');
  }

  private boardValue6X() {
    const items = this._items.flat();
    const idx1 = items.findIndex(e => e === MARKER_CHAR);
    const idx2 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx1);
    const idx3 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx2);
    const idx4 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx3);
    const idx5 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx4);
    const idx6 = items.findIndex((e, i) => e === MARKER_CHAR && i > idx5);

    if (
      (idx1 === 0 &&
        idx2 === 1 &&
        idx3 === 3 &&
        idx4 === 5 &&
        idx5 === 7 &&
        idx6 === 8) ||
      (idx1 === 1 &&
        idx2 === 2 &&
        idx3 === 3 &&
        idx4 === 5 &&
        idx5 === 6 &&
        idx6 === 7)
    ) {
      return MisereQuotient.a;
    }

    throw new Error('Something messed up :(');
  }

  public boardValue(): number {
    if (this.isDead()) {
      return MisereQuotient.one;
    }
    const list = this._items.flat();
    const countX = list.filter(e => e === MARKER_CHAR).length;
    // empty board
    if (countX === 0) {
      return MisereQuotient.c;
    }
    // single X
    if (countX === 1) {
      return this.boardValue1X();
    }
    // double X
    if (countX === 2) {
      return this.boardValue2X();
    }
    // tripe X
    if (countX === 3) {
      return this.boardValue3X();
    }
    // 4 X
    if (countX === 4) {
      return this.boardValue4X();
    }
    // 5 X
    if (countX === 5) {
      return this.boardValue5X();
    }
    // 5 X
    if (countX === 6) {
      return this.boardValue6X();
    }

    throw new Error('Something messed up :(');
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
    return (
      (items[0] === MARKER_CHAR &&
        items[1] === MARKER_CHAR &&
        items[2] === MARKER_CHAR) ||
      (items[3] === MARKER_CHAR &&
        items[4] === MARKER_CHAR &&
        items[5] === MARKER_CHAR) ||
      (items[6] === MARKER_CHAR &&
        items[7] === MARKER_CHAR &&
        items[8] === MARKER_CHAR) ||
      (items[0] === MARKER_CHAR &&
        items[3] === MARKER_CHAR &&
        items[6] === MARKER_CHAR) ||
      (items[1] === MARKER_CHAR &&
        items[4] === MARKER_CHAR &&
        items[7] === MARKER_CHAR) ||
      (items[2] === MARKER_CHAR &&
        items[5] === MARKER_CHAR &&
        items[8] === MARKER_CHAR) ||
      (items[0] === MARKER_CHAR &&
        items[4] === MARKER_CHAR &&
        items[8] === MARKER_CHAR) ||
      (items[2] === MARKER_CHAR &&
        items[4] === MARKER_CHAR &&
        items[6] === MARKER_CHAR)
    );
  }
}

export default Board;

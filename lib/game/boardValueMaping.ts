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

export type ValueMapping = {
  indexes: number[][];
  value: MisereQuotient;
};

const valueMapping1X: ValueMapping[] = [
  {
    indexes: [[0], [2], [6], [8]],
    value: MisereQuotient.one,
  },
  {
    indexes: [[1], [3], [5], [7]],
    value: MisereQuotient.one,
  },
  {
    indexes: [[4]],
    value: MisereQuotient.c * MisereQuotient.c,
  },
];

const valueMapping2X: ValueMapping[] = [
  {
    indexes: [
      [0, 1],
      [1, 2],
      [0, 3],
      [2, 5],
      [3, 6],
      [5, 8],
      [6, 7],
      [7, 8],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    indexes: [
      [0, 2],
      [0, 6],
      [2, 8],
      [6, 8],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 4],
      [2, 4],
      [4, 6],
      [4, 8],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 5],
      [0, 7],
      [1, 6],
      [1, 8],
      [2, 3],
      [2, 7],
      [3, 8],
      [5, 6],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 8],
      [2, 6],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [1, 3],
      [1, 5],
      [1, 7],
      [3, 7],
      [5, 7],
      [3, 5],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [1, 4],
      [3, 4],
      [4, 5],
      [4, 7],
    ],
    value: MisereQuotient.b,
  },
];

const valueMapping3X: ValueMapping[] = [
  {
    indexes: [
      [0, 1, 3],
      [1, 2, 5],
      [3, 6, 7],
      [5, 7, 8],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 4],
      [1, 2, 4],
      [0, 3, 4],
      [3, 4, 6],
      [4, 6, 7],
      [4, 7, 8],
      [4, 5, 8],
      [2, 4, 5],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 5],
      [0, 1, 7],
      [1, 2, 3],
      [1, 2, 7],
      [0, 3, 5],
      [0, 3, 7],
      [2, 3, 5],
      [2, 5, 7],
      [1, 3, 6],
      [3, 5, 6],
      [1, 6, 7],
      [5, 6, 7],
      [1, 5, 8],
      [3, 5, 8],
      [1, 7, 8],
      [3, 7, 8],
    ],
    value: MisereQuotient.d,
  },
  {
    indexes: [
      [0, 1, 6],
      [0, 5, 6],
      [0, 6, 7],
      [0, 2, 3],
      [0, 2, 7],
      [0, 2, 5],
      [2, 3, 8],
      [1, 2, 8],
      [2, 7, 8],
      [1, 6, 8],
      [3, 6, 8],
      [5, 6, 8],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 1, 8],
      [0, 3, 8],
      [0, 7, 8],
      [0, 5, 8],
      [1, 2, 6],
      [2, 5, 6],
      [2, 3, 6],
      [2, 6, 7],
    ],
    value: MisereQuotient.d,
  },
  {
    indexes: [
      [0, 2, 4],
      [0, 4, 6],
      [2, 4, 8],
      [4, 6, 8],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 2, 6],
      [0, 2, 8],
      [0, 6, 8],
      [2, 6, 8],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    indexes: [
      [1, 4, 6],
      [1, 4, 8],
      [2, 3, 4],
      [3, 4, 8],
      [0, 4, 5],
      [4, 5, 6],
      [0, 4, 7],
      [2, 4, 7],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [1, 3, 8],
      [1, 5, 6],
      [2, 3, 7],
      [0, 5, 7],
    ],
    value: MisereQuotient.one,
  },
  {
    indexes: [
      [1, 3, 4],
      [1, 4, 5],
      [3, 4, 7],
      [4, 5, 7],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    indexes: [
      [1, 3, 7],
      [1, 5, 7],
      [1, 3, 5],
      [3, 5, 7],
    ],
    value: MisereQuotient.b,
  },
];

const valueMapping4X: ValueMapping[] = [
  {
    indexes: [
      [0, 1, 3, 4],
      [1, 2, 4, 5],
      [3, 4, 6, 7],
      [4, 5, 7, 8],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 1, 3, 5],
      [1, 2, 3, 5],
      [0, 1, 3, 7],
      [1, 3, 6, 7],
      [3, 5, 6, 7],
      [3, 5, 7, 8],
      [1, 2, 5, 7],
      [1, 5, 7, 8],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 1, 3, 8],
      [1, 2, 5, 6],
      [2, 3, 6, 7],
      [0, 5, 7, 8],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 1, 4, 5],
      [4, 5, 6, 7],
      [1, 3, 4, 6],
      [1, 4, 5, 8],
      [1, 2, 3, 4],
      [3, 4, 7, 8],
      [0, 3, 4, 7],
      [2, 4, 5, 7],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 4, 6],
      [0, 4, 6, 7],
      [1, 2, 4, 8],
      [2, 4, 7, 8],
      [3, 4, 6, 8],
      [4, 5, 6, 8],
      [0, 2, 3, 4],
      [0, 2, 4, 5],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 5, 6],
      [0, 5, 6, 7],
      [2, 3, 7, 8],
      [1, 2, 3, 8],
      [1, 3, 6, 8],
      [1, 5, 6, 8],
      [0, 2, 3, 7],
      [0, 2, 5, 7],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 5, 7],
      [1, 5, 6, 7],
      [1, 3, 5, 6],
      [1, 3, 5, 8],
      [1, 3, 7, 8],
      [1, 2, 3, 7],
      [0, 3, 5, 7],
      [2, 3, 5, 7],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 5, 8],
      [1, 2, 3, 6],
      [2, 5, 6, 7],
      [0, 3, 7, 8],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 6, 7],
      [1, 2, 7, 8],
      [3, 5, 6, 8],
      [0, 2, 3, 6],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 6, 8],
      [1, 2, 6, 8],
      [0, 2, 6, 7],
      [0, 2, 7, 8],
      [0, 5, 6, 8],
      [0, 2, 5, 6],
      [0, 2, 3, 8],
      [2, 3, 6, 8],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 7, 8],
      [1, 2, 6, 7],
      [0, 3, 5, 8],
      [2, 3, 5, 6],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [1, 4, 6, 8],
      [2, 3, 4, 8],
      [0, 2, 4, 7],
      [0, 4, 5, 6],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [[0, 2, 6, 8]],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 4, 5, 7],
      [1, 4, 5, 6],
      [1, 3, 4, 8],
      [2, 3, 4, 7],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [[1, 3, 5, 7]],
    value: MisereQuotient.a,
  },
];

const valueMapping5X: ValueMapping[] = [
  {
    indexes: [
      [0, 1, 3, 5, 7],
      [1, 2, 3, 5, 7],
      [1, 3, 5, 6, 7],
      [1, 3, 5, 7, 8],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 3, 5, 8],
      [1, 2, 3, 5, 6],
      [0, 3, 5, 7, 8],
      [2, 3, 5, 6, 7],
      [0, 1, 3, 7, 8],
      [1, 2, 3, 6, 7],
      [0, 1, 5, 7, 8],
      [1, 2, 5, 6, 7],
    ],
    value: MisereQuotient.b,
  },
  {
    indexes: [
      [0, 1, 4, 5, 6],
      [1, 4, 5, 6, 8],
      [1, 3, 4, 6, 8],
      [1, 2, 3, 4, 8],
      [0, 2, 3, 4, 7],
      [2, 3, 4, 7, 8],
      [0, 2, 4, 5, 7],
      [0, 4, 5, 6, 7],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 1, 5, 6, 7],
      [1, 2, 3, 7, 8],
      [1, 3, 5, 6, 8],
      [0, 2, 3, 5, 7],
    ],
    value: MisereQuotient.a,
  },
  {
    indexes: [
      [0, 1, 5, 6, 8],
      [1, 2, 3, 6, 8],
      [0, 2, 3, 7, 8],
      [0, 2, 5, 6, 7],
    ],
    value: MisereQuotient.a,
  },
];

const valueMapping6X: ValueMapping[] = [
  {
    indexes: [
      [0, 1, 3, 5, 7, 8],
      [1, 2, 3, 5, 6, 7],
    ],
    value: MisereQuotient.a,
  },
];

const allMapping = [
  ...valueMapping6X,
  ...valueMapping5X,
  ...valueMapping4X,
  ...valueMapping3X,
  ...valueMapping2X,
  ...valueMapping1X,
];

export function findInValueMapping(items: string[][]) {
  const list = items.flat();
  for (let val of allMapping) {
    if (val.indexes.some(v => v.every(i => list[i] === MARKER_CHAR))) {
      return val.value;
    }
  }
  throw new Error('Something messed up :(');
}

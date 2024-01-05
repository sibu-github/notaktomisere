import {MisereQuotient} from './definitions';

type BoardConfigWithValue = {
  config: string[][];
  value: MisereQuotient;
};

export const BOARD_CONFIG_TEST_DATA: BoardConfigWithValue[] = [
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.d,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['', '', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.d,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', ''],
      ['X', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['X', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', ''],
      ['', 'X', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', 'X', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.a * MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', '', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', '', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.b,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', 'X', 'X'],
      ['X', '', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', 'X', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', '', 'X'],
      ['X', 'X', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', 'X', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', ''],
      ['X', '', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', '', 'X'],
      ['', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['', '', 'X'],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', 'X'],
      ['X', '', ''],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', ''],
      ['X', '', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', 'X', ''],
      ['X', '', 'X'],
      ['', 'X', 'X'],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['X', '', 'X'],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['', 'X', 'X'],
      ['', '', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.a,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', ''],
      ['X', 'X', ''],
    ],
    value: MisereQuotient.b,
  },
];

export const DEAD_BOARD_TEST_DATA: BoardConfigWithValue[] = [
  {
    config: [
      ['X', 'X', 'X'],
      ['', '', ''],
      ['', '', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', '', ''],
      ['X', 'X', 'X'],
      ['', '', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', '', ''],
      ['', '', ''],
      ['X', 'X', 'X'],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['X', '', ''],
      ['X', '', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', 'X', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', '', 'X'],
      ['', '', 'X'],
      ['', '', 'X'],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['X', '', ''],
      ['', 'X', ''],
      ['', '', 'X'],
    ],
    value: MisereQuotient.one,
  },
  {
    config: [
      ['', '', 'X'],
      ['', 'X', ''],
      ['X', '', ''],
    ],
    value: MisereQuotient.one,
  },
];

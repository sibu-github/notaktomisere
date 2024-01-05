import {
  CurrentPlayer,
  MisereQuotient,
  NO_OF_BOARDS,
  PlayerType,
} from './definitions';
import Game from './game';

describe('game', () => {
  test('new game works', async () => {
    const game = new Game();
    expect(game.numberOfBoards).toBe(NO_OF_BOARDS);
    expect(game.currentPlayer).toBe(CurrentPlayer.One);
    expect(game.isFinished).toBe(false);
    expect(game.player1Moves.length).toBe(0);
    expect(game.player2Moves.length).toBe(0);
    expect(game.winner).toBe(undefined);
    for (let i = 0; i < NO_OF_BOARDS; i++) {
      expect(game.boards[i].boardValue()).toBe(MisereQuotient.c);
    }
  });

  test('game play', async () => {
    const game = new Game();
    game.setPlayerTypes(PlayerType.Computer, PlayerType.Human);
    let counter = 0;
    while (!game.isFinished) {
      const move = game.findNextMove();
      game.makeMove(move);
      counter += 1;
      if (counter > 27) {
        throw new Error('Game play messed up!');
      }
    }
    for (let i = 0; i < NO_OF_BOARDS; i++) {
      expect(game.boards[i].isDead()).toBe(true);
    }
    expect(game.winner).not.toBe(undefined);
  });

  test('3 straight dead boards', async () => {
    const game = new Game();
    game.setPlayerTypes(PlayerType.Computer, PlayerType.Human);
    game.makeMove({boardIndex: 0, x: 0, y: 0});
    game.makeMove({boardIndex: 0, x: 1, y: 0});
    game.makeMove({boardIndex: 0, x: 2, y: 0});
    game.makeMove({boardIndex: 1, x: 0, y: 0});
    game.makeMove({boardIndex: 1, x: 1, y: 0});
    game.makeMove({boardIndex: 1, x: 2, y: 0});
    game.makeMove({boardIndex: 2, x: 0, y: 0});
    game.makeMove({boardIndex: 2, x: 1, y: 0});
    game.makeMove({boardIndex: 2, x: 2, y: 0});
    expect(() => game.makeMove({boardIndex: 1, x: 1, y: 1})).toThrow();
    expect(game.isFinished).toBe(true);
    expect(game.winner).toBe(CurrentPlayer.Two);
  });
});

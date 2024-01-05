import Board from './board';
import {P_POSITIONS, applyTransformations} from './boardValueMaping';
import {
  BoardMove,
  CurrentPlayer,
  NO_OF_BOARDS,
  PlayerType,
} from './definitions';
import {randomNumber} from './helper';

class Game {
  numberOfBoards: number;
  player1Type: PlayerType | undefined;
  player2Type: PlayerType | undefined;
  player1Moves: BoardMove[];
  player2Moves: BoardMove[];
  currentPlayer: CurrentPlayer;
  winner: CurrentPlayer | undefined;
  isFinished: boolean;
  boards: Board[];

  constructor(numberOfBoards = NO_OF_BOARDS) {
    this.numberOfBoards = numberOfBoards;
    this.player1Moves = [];
    this.player2Moves = [];
    this.currentPlayer = CurrentPlayer.One;
    this.isFinished = false;
    this.boards = Array(this.numberOfBoards)
      .fill(0)
      .map(() => new Board());
  }

  public setPlayerTypes(player1Type: PlayerType, player2Type: PlayerType) {
    this.player1Type = player1Type;
    this.player2Type = player2Type;
  }

  public getBoardItems(boardIndex: number) {
    return this.boards[boardIndex].items;
  }

  public isDeadBoard(boardIndex: number) {
    return this.boards[boardIndex].isDead();
  }

  private getNextPlayer() {
    return this.currentPlayer === CurrentPlayer.One
      ? CurrentPlayer.Two
      : CurrentPlayer.One;
  }

  private calculateWinner() {
    if (this.boards.every(board => board.isDead())) {
      this.isFinished = true;
      this.winner = this.getNextPlayer();
    }
  }

  public makeMove(move: BoardMove) {
    if (!this.player1Type || !this.player2Type) {
      return;
    }
    const {boardIndex, x, y} = move;
    if (this.currentPlayer === CurrentPlayer.One) {
      this.player1Moves.push(move);
    } else {
      this.player2Moves.push(move);
    }
    this.boards[boardIndex].markAtPos(x, y);
    this.calculateWinner();
    this.currentPlayer = this.getNextPlayer();
  }

  private totalBoardValue(boards: Board[]) {
    const val = boards.reduce((v, board) => v * board.boardValue(), 1);
    return applyTransformations(val);
  }

  private boardSize() {
    return this.boards[0].colSize * this.boards[0].rowSize;
  }

  private boardIndexFromPosition(pos: number): number {
    return Math.floor(pos / this.boardSize());
  }

  private xFromPosition(pos: number): number {
    return pos % this.boards[0].rowSize;
  }

  private yFromPosition(pos: number): number {
    return Math.floor(pos / this.boards[0].colSize) % this.boards[0].colSize;
  }

  private cloneBoards() {
    return this.boards.map(board => board.clone());
  }

  public findNextMove(): BoardMove {
    if (this.isFinished) {
      throw new Error('Game is finished already');
    }
    const boards = this.cloneBoards();
    const randomStart = randomNumber();
    let possibleMove: BoardMove | undefined;
    let position = randomStart;
    while (true) {
      let boardIndex = this.boardIndexFromPosition(position);
      let x = this.xFromPosition(position);
      let y = this.yFromPosition(position);
      if (boards[boardIndex].isMovePossible(x, y)) {
        possibleMove = {boardIndex, x, y};
        boards[boardIndex].markAtPos(x, y);
        if (P_POSITIONS.includes(this.totalBoardValue(boards))) {
          return possibleMove;
        }
        boards[boardIndex].clearAtPos(x, y);
      }
      position = (position + 1) % (this.numberOfBoards * this.boardSize());
      if (randomStart === position) {
        break;
      }
    }
    if (!possibleMove) {
      throw new Error('Could not find any possible move');
    }
    return possibleMove;
  }
}

export default Game;

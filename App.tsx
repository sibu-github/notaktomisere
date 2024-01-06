import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Board from './lib/game/board';
import {createEmptyBoard, findNextMove, makeMove} from './lib/game/game';
import {BoardMove, CurrentPlayer} from './lib/game/definitions';

const PLAYER_1_COLOR = '#d60505';
const PLAYER_2_COLOR = '#008afc';
const LAST_MOVE_COLOR = '#f4dbb1';

const RULES = [
  '1. Notakto Misere Mode is an alternate version of Tic-Tac-Toe game.',
  '2. Game starts with 3 boards. A player can choose to make a move in any of the 3 boards.',
  "3. In this game both players enter same symbol that is both players enter 'X'.",
  "4. If a board contains 3'X' in a line then that board is dead and no longer available to make any more moves. The game continues on other available boards.",
  '5. The game ends when all 3 boards are dead.',
  "6. The player who makes 3'X' in a line in the last board looses the game.",
  '7. In a Tic-Tac-Toe game most of the time a game ends in a draw. But in this alternate version there will always be a winner.',
  "8. As a player your stategy should be to force your opponent to make 3'X' in a line in the last board.",
];

function App() {
  const [showRules, setShowRules] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState<CurrentPlayer>(
    CurrentPlayer.One,
  );
  const [winner, setWinner] = useState<CurrentPlayer | undefined>();
  const [lastMove, setLastMove] = useState<BoardMove>();
  const [player1Moves, setPlayer1Moves] = useState<BoardMove[]>([]);
  const [player2Moves, setPlayer2Moves] = useState<BoardMove[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [boards, setBoard] = useState<Board[]>([]);

  const newGame = () => {
    setShowRules(false);
    setCurrentPlayer(CurrentPlayer.One);
    setWinner(undefined);
    setLastMove(undefined);
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setIsFinished(false);
    setBoard(createEmptyBoard());
  };

  const getNextPlayer = (player: CurrentPlayer) =>
    player === CurrentPlayer.One ? CurrentPlayer.Two : CurrentPlayer.One;

  const calculateWinner = (newBoards: Board[], player: CurrentPlayer) => {
    if (newBoards.every(board => board.isDead())) {
      setIsFinished(true);
      setWinner(getNextPlayer(player));
      return true;
    }

    return false;
  };

  const insertPlayerMoves = (move: BoardMove, player: CurrentPlayer) => {
    const {boardIndex, x, y} = move;
    setLastMove({boardIndex, x, y});
    if (player === CurrentPlayer.One) {
      const moves = [...player1Moves, {boardIndex, x, y}];
      setPlayer1Moves(moves);
      return;
    }
    const moves = [...player2Moves, {boardIndex, x, y}];
    setPlayer2Moves(moves);
  };

  const onPressCell = (move: BoardMove) => {
    if (isFinished || currentPlayer !== CurrentPlayer.One) {
      return;
    }
    insertPlayerMoves(move, CurrentPlayer.One);
    const newBoards = makeMove(move, boards);
    setBoard(newBoards);
    const finished = calculateWinner(newBoards, CurrentPlayer.One);
    setCurrentPlayer(getNextPlayer(CurrentPlayer.One));
    if (!finished) {
      const botMove = findNextMove(newBoards);
      setTimeout(() => {
        insertPlayerMoves(botMove, CurrentPlayer.Two);
        const boardsAfterMove = makeMove(botMove, newBoards);
        setBoard(boardsAfterMove);
        calculateWinner(newBoards, CurrentPlayer.Two);
        setCurrentPlayer(getNextPlayer(CurrentPlayer.Two));
      }, 100);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#a33939" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>Notakto Misere Mode</Text>
        {showRules ? (
          <View style={styles.rulesWrapper}>
            <Text style={styles.rulesHeader}>RULES</Text>
            {RULES.map((txt, idx) => (
              <Text key={idx} style={styles.rulesTxt}>
                {txt}
              </Text>
            ))}
            <Pressable style={styles.letsStartBtn} onPress={newGame}>
              <Text style={styles.letsStartBtnTxt}>Let's start</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <ShowPlayer />
            <View>
              {boards.map((board, idx) => (
                <BoardView
                  key={idx}
                  boardIndex={idx}
                  board={board}
                  lastMove={lastMove}
                  player1Moves={player1Moves}
                  player2Moves={player2Moves}
                  onPress={onPressCell}
                />
              ))}
            </View>
            <ShowWinner
              isFinished={isFinished}
              winner={winner}
              playAgain={newGame}
            />
            <ShowMoves
              showMoves={isFinished}
              player1Moves={player1Moves}
              player2Moves={player2Moves}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

type BoardViewProps = {
  board: Board;
  boardIndex: number;
  player1Moves: BoardMove[];
  player2Moves: BoardMove[];
  lastMove: BoardMove | undefined;
  onPress: (move: BoardMove) => void;
};
function BoardView(props: BoardViewProps) {
  const onPress = (x: number, y: number) => {
    if (props.board.items[y][x] === '') {
      props.onPress({boardIndex: props.boardIndex, x, y});
    }
  };

  const lastMoveBackground = (x: number, y: number) => {
    if (!props.lastMove) {
      return;
    }
    if (
      props.lastMove.boardIndex === props.boardIndex &&
      props.lastMove.x === x &&
      props.lastMove.y === y
    ) {
      return {backgroundColor: LAST_MOVE_COLOR};
    }
    return {};
  };

  const borderStyle = (x: number, y: number) => {
    if ((y === 0 || y === 1) && (x === 0 || x === 1)) {
      return {borderBottomWidth: 1, borderRightWidth: 1};
    }
    if ((y === 0 || y === 1) && x === 2) {
      return {borderBottomWidth: 1};
    }
    if (y === 2 && (x === 0 || x === 1)) {
      return {borderRightWidth: 1};
    }
  };

  const cellTxtStyle = (x: number, y: number) => {
    if (
      props.player1Moves.some(
        m => m.boardIndex === props.boardIndex && m.x === x && m.y === y,
      )
    ) {
      return {color: PLAYER_1_COLOR};
    } else if (
      props.player2Moves.some(
        m => m.boardIndex === props.boardIndex && m.x === x && m.y === y,
      )
    ) {
      return {color: PLAYER_2_COLOR};
    } else {
      return {color: '#000000'};
    }
  };

  return (
    <View style={styles.boardContainer}>
      {props.board.items.map((row, y) => (
        <View key={y} style={styles.boardRow}>
          {row.map((cell, x) => (
            <Pressable
              key={x}
              style={[styles.cell, borderStyle(x, y), lastMoveBackground(x, y)]}
              onPress={() => onPress(x, y)}>
              <Text style={[styles.cellTxt, cellTxtStyle(x, y)]}>{cell}</Text>
            </Pressable>
          ))}
        </View>
      ))}
      {props.board.isDead() && <View style={styles.deadBoard} />}
    </View>
  );
}

type ShowWinnerProps = {
  isFinished: boolean;
  winner: CurrentPlayer | undefined;
  playAgain: () => void;
};
function ShowWinner(props: ShowWinnerProps) {
  if (!props.isFinished) {
    return false;
  }
  let txt = "I'm sorry! You have lost.";
  if (props.winner === CurrentPlayer.One) {
    txt = 'Congratulations! You have won.';
  }

  return (
    <View style={styles.resultWrapper}>
      <Text style={styles.winnerTxt}>Winner is: Player {props.winner}</Text>
      <Text style={styles.resultTxt}>{txt}</Text>
      <Pressable style={styles.playAgainBtn} onPress={props.playAgain}>
        <Text style={styles.playAgainBtnTxt}>Play again!</Text>
      </Pressable>
    </View>
  );
}

type ShowMovesProps = {
  showMoves: boolean;
  player1Moves: BoardMove[];
  player2Moves: BoardMove[];
};
function ShowMoves(props: ShowMovesProps) {
  if (!props.showMoves) {
    return false;
  }
  return (
    <View>
      <Text style={styles.allMoveTxt}>All Moves</Text>
      <View style={styles.movesTblWrapper}>
        <View style={[styles.movesWrapper, {backgroundColor: PLAYER_1_COLOR}]}>
          <Text style={styles.moveTxt}>Player 1</Text>
          {props.player1Moves.map((m, i) => (
            <Text key={i} style={styles.moveTxt}>
              Board: {m.boardIndex + 1} Row: {m.y + 1} Col: {m.x + 1}
            </Text>
          ))}
        </View>
        <View style={[styles.movesWrapper, {backgroundColor: PLAYER_2_COLOR}]}>
          <Text style={styles.moveTxt}>Player 2</Text>
          {props.player2Moves.map((m, i) => (
            <Text key={i} style={styles.moveTxt}>
              Board: {m.boardIndex + 1} Row: {m.y + 1} Col: {m.x + 1}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

function ShowPlayer() {
  return (
    <View style={styles.showPlayerWrapper}>
      <Text style={{color: PLAYER_1_COLOR}}>
        Player 1: <Text>You</Text>
      </Text>
      <Text style={{color: PLAYER_2_COLOR}}>
        Player 2: <Text>Computer</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#c14549',
    fontSize: 24,
    height: 60,
    lineHeight: 60,
  },
  rulesWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  rulesHeader: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '700',
    alignSelf: 'center',
  },
  rulesTxt: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
    fontStyle: 'italic',
  },
  letsStartBtn: {
    width: 120,
    height: 50,
    backgroundColor: '#c14549',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letsStartBtnTxt: {
    color: '#ffffff',
    fontSize: 20,
  },
  showPlayerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  winnerTxt: {
    textAlign: 'center',
    color: '#000000',
  },
  boardContainer: {
    margin: 10,
    width: 180,
    position: 'relative',
    alignSelf: 'center',
  },
  deadBoard: {
    backgroundColor: '#000000a4',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  boardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTxt: {
    fontSize: 24,
  },
  playAgainBtn: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#000000',
    alignSelf: 'center',
    backgroundColor: '#c14549',
  },
  playAgainBtnTxt: {
    color: '#ffffff',
    fontSize: 16,
  },
  resultWrapper: {
    margin: 10,
    alignItems: 'center',
  },
  resultTxt: {
    fontSize: 16,
    color: '#000000',
    margin: 10,
  },
  allMoveTxt: {
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
  },
  movesTblWrapper: {
    flexDirection: 'row',
  },
  movesWrapper: {
    width: '50%',
  },
  moveTxt: {
    color: '#ffffff',
    fontSize: 16,
    paddingVertical: 5,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  knowMoreTxt: {
    color: '#000000',
    marginTop: 30,
    fontStyle: 'italic',
  },
});

export default App;

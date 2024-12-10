import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { Player } from "./Player";
import { StepLog } from "./StepLog";

const initialGameBoard = [null, null, null, null, null, null, null, null, null];
const winningCombination = [
  // Horizontal Rows (already included for X and O)
  ["X", "X", "X", null, null, null, null, null, null],
  [null, null, null, "X", "X", "X", null, null, null],
  [null, null, null, null, null, null, "X", "X", "X"],
  ["X", null, null, null, "X", null, null, null, "X"],
  [null, null, "X", null, "X", null, "X", null, null],
  ["X", null, null, "X", null, null, "X", null, null],
  [null, "X", null, null, "X", null, null, "X", null],
  [null, null, "X", null, null, "X", null, null, "X"],

  ["O", null, null, null, "O", null, null, null, "O"],
  [null, null, "O", null, "O", null, "O", null, null],
  ["O", "O", "O", null, null, null, null, null, null],
  [null, null, null, "O", "O", "O", null, null, null],
  [null, null, null, null, null, null, "O", "O", "O"],
  ["O", null, null, "O", null, null, "O", null, null],
  [null, "O", null, null, "O", null, null, "O", null],
  [null, null, "O", null, null, "O", null, null, "O"],
];

export const TicTacToe = () => {
  const [stepLog, setStepLog] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [activePlayer, setActivePlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkCombination = (playerArray) => {
    return winningCombination.some((pattern) => {
      return pattern.every(
        (value, index) => value === null || value === playerArray[index]
      );
    });
  };

  function handleCellClick(cellIndex) {
    // When we click a cell we are doing following actions

    //1. Toggle active player
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );

    //2. Updating the game board
    setGameBoard((gameBoard) => {
      const shadowBoard = [...gameBoard];
      shadowBoard[cellIndex] = activePlayer;
      if (checkCombination(shadowBoard)) {
        // Checking for winner after every step
        setWinner(activePlayer);
      }
      return shadowBoard;
    });

    //3. Updating the step log
    setStepLog((previousStepLog) => {
      const updatedStepLog = [
        `Player ${activePlayer} clicked cell no ${cellIndex + 1}`,
        ...previousStepLog,
      ];
      return updatedStepLog;
    });
  }

  function resetGame() {
    setGameBoard(initialGameBoard);
    setWinner(null);
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 tic-tac-toe"
      id="tic-tac-toe"
    >
      <div className="card border-0 shadow">
        <div className="card-body bg-dark">
          <h5 className="card-title text-center fs-2 text-uppercase">
            Tic-Tac-Toe
          </h5>
          <div className="row text-center my-3">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            ></Player>
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            ></Player>
            <GameBoard
              activePlayer={activePlayer}
              handleCellClick={handleCellClick}
              gameBoard={gameBoard}
              winner={winner}
              resetGame={resetGame}
            ></GameBoard>
            <StepLog stepLog={stepLog}></StepLog>
          </div>
        </div>
      </div>
    </div>
  );
};

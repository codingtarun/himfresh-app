import { useState } from "react";
import { GameBoard } from "./GameBoard";
import { Player } from "./Player";
import { StepLog } from "./StepLog";

const initialGameBoard = [null, null, null, null, null, null, null, null, null];

export const TicTacToe = () => {
  const [stepLog, setStepLog] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [activePlayer, setActivePlayer] = useState("X");

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
            ></GameBoard>
            <StepLog stepLog={stepLog}></StepLog>
          </div>
        </div>
      </div>
    </div>
  );
};

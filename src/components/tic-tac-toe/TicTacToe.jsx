import { useState } from "react";
import { Player } from "./Player";

const initialGameBoard = [null, null, null, null, null, null, null, null, null];

export const TicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("O");
  function handleCellUpdate(cellIndex) {
    setGameBoard((gameBoard) => {
      const shadowBoard = [...gameBoard];
      shadowBoard[cellIndex] = activePlayerSymbol;
      return shadowBoard;
    });
    if (activePlayerSymbol === "X") {
      setActivePlayerSymbol("O");
    } else {
      setActivePlayerSymbol("X");
    }
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
            <Player name="Player 1" symbol="O" isActive={true}></Player>
            <Player name="Player 2" symbol="X" isActive={false}></Player>
          </div>
          <div className="tic-tac-toe__box mb-3">
            {gameBoard.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`tic-tac-toe__box--grid ${activePlayerSymbol}`}
                onClick={() => handleCellUpdate(cellIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

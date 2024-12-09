import { useState } from "react";

export const GameBoard = ({ activePlayer, handleCellClick, gameBoard }) => {
  //   function handleCellUpdate(cellIndex) {
  //
  //   }
  return (
    <div className="tic-tac-toe__box mb-3">
      {gameBoard.map((cell, cellIndex) => (
        <div
          key={cellIndex}
          className={`tic-tac-toe__box--grid ${activePlayer}`}
          onClick={() => handleCellClick(cellIndex)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

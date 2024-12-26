export const GameBoard = ({
  activePlayer,
  handleCellClick,
  gameBoard,
  winner,
  resetGame,
}) => {
  return (
    <div id="game-box">
      <div className="tic-tac-toe__box mb-3" id="game-board">
        {gameBoard.map((cell, cellIndex) => (
          <button
            key={cellIndex}
            className={`tic-tac-toe__box--grid ${
              cell != null ? "disabled-btn" : activePlayer
            }`}
            onClick={() => handleCellClick(cellIndex)}
            disabled={cell != null}
          >
            {cell}
          </button>
        ))}
      </div>
      <div
        id="game-options"
        className={`position-absolute top-0 left-0 w-100 h-100 ${
          winner == null ? "d-none" : "d-flex"
        } flex-column justify-content-center align-items-center`}
      >
        <h3 className="text-center mb-3">Tik-Tac-Toe Game</h3>
        <h2>
          <i>
            <b>{winner}</b>
          </i>{" "}
          wins the game
        </h2>
        <div className="btn-group mb-3">
          <button className="btn btn-outline-primary">
            <i className="fas fa-pause"></i>
          </button>
          <button className="btn btn-outline-secondary" onClick={resetGame}>
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

export const Player = ({ name, isActive, symbol }) => {
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditToggle() {
    setEdit((edit) => !edit);
  }

  function handlePlayerNameChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <div className="col-6">
      <div className={`input-group mb-3 ${isActive ? "active-player" : ""}`}>
        <span className="input-group-text" onClick={handleEditToggle}>
          {edit ? (
            <i className="fa-solid fa-floppy-disk"></i>
          ) : (
            <i className="fa-solid fa-pen-to-square"></i>
          )}
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          value={playerName}
          disabled={!edit}
          onChange={handlePlayerNameChange}
        />
        <span className="input-group-text fw-bold">
          {symbol} {isActive}
        </span>
      </div>
    </div>
  );
};

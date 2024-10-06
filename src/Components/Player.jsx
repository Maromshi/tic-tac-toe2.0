import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive, onNameChange }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsediting] = useState(false);

  const handleEditClick = () => {
    setIsediting((edit) => !edit); // use this when you base on your previous value.

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          ></input>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;

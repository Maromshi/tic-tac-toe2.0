import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a Draw!</p>}

      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
};

export default GameOver;

import React from "react";

const GameStatus = ({ gameStatus }) => {
  return (
    <p data-testid="gameStatus">
      {gameStatus}
    </p>
  );
};

export default GameStatus;
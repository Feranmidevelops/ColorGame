import React from "react";

const NewGameButton = ({ startNewGame }) => {
  return (
    <button data-testid="newGameButton" onClick={startNewGame}>
      New Game
    </button>
  );
};

export default NewGameButton;
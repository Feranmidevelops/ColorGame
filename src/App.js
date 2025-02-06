import React, { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import GameInstructions from "./components/GameInstructions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";
import "./App.css";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E74C3C"];

function App() {
  const [targetColor, setTargetColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [gameStatus, setGameStatus] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = (color) => {
    if (color === targetColor) {
      setGameStatus("Correct! Well done!");
      setScore(score + 1);
    } else {
      setGameStatus("Wrong! Try again!");
    }
  };

  const startNewGame = () => {
    setTargetColor(colors[Math.floor(Math.random() * colors.length)]);
    setGameStatus("");
  };

  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <ColorBox targetColor={targetColor} />
      <GameInstructions />
      <ColorOptions colors={colors} handleGuess={handleGuess} />
      <GameStatus gameStatus={gameStatus} />
      <Score score={score} />
      <NewGameButton startNewGame={startNewGame} />
    </div>
  );
}

export default App;
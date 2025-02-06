import React from "react";

const ColorOptions = ({ colors, handleGuess }) => {
  return (
    <div className="color-options">
      {colors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          style={{ backgroundColor: color, width: "100px", height: "50px", margin: "10px" }}
          onClick={() => handleGuess(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;
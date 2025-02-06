import React from "react";

const ColorBox = ({ targetColor }) => {
  return (
    <div
      data-testid="colorBox"
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: targetColor,
        margin: "20px auto",
        border: "2px solid black",
      }}
    ></div>
  );
};

export default ColorBox;
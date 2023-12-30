import React from "react";
import "./Cube.css";

const Cube = ({
  scaleSize,
  transformExtension = "",
  classNameExtension = "",
}) => {
  const faceStyle = {};

  return (
    <div
      className={`cube-container ${classNameExtension}`}
      style={{ transform: `scale(${scaleSize}) ${transformExtension}` }}
    >
      <div
        className="cube"
        style={{ animationDuration: `${100 * scaleSize}s` }}
      >
        <div className="face" style={faceStyle}></div>
        <div className="face" style={faceStyle}></div>
        <div className="face" style={faceStyle}></div>
        <div className="face" style={faceStyle}></div>
        <div className="face" style={faceStyle}></div>
        <div className="face" style={faceStyle}></div>
      </div>
    </div>
  );
};

export default Cube;

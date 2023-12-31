import React, { useState, useEffect } from "react";
import "./Movable.css"; // Import your CSS file for styling
import LightBall from "../LightBall/LightBall";
import { useScrollContext } from "../../contexts/ScrollContext";

const Movable = () => {
  const { divPosition } = useScrollContext();

  return (
    <div>
      <div
        className="movable-div"
        style={{
          top: `${divPosition}px`,
          right: "10vw",
        }}
      >
        <LightBall />
      </div>
    </div>
  );
};

export default Movable;

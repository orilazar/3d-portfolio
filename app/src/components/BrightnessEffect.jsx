import React, { useState, useEffect } from "react";
import "./BrightnessEffect.css"; // Import your CSS file with styles

const BrightnessEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      setPosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="brightness-effect"
      style={{
        left: position.x + "px",
        top: position.y + "px",
        opacity: 1,
      }}
    />
  );
};
export default BrightnessEffect;

import { useState, useEffect } from "react";

const WalkingPet = ({
  petSrc,
  alt,
  speed,
  msBetweenFrames,
  width,
  reversed = false,
  bottom = "0",
  startPosition = 1,
}) => {
  const [position, setPosition] = useState(startPosition);
  const [direction, setDirection] = useState(1);
  let d = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 92) {
          d = -1;

          setDirection(-1);
          return 90;
        }
        if (prev <= 5) {
          d = 1;
          setDirection(1);
          return 6;
        }
        return (prev + speed * d) % 100;
      });
    }, msBetweenFrames);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <img
      src={petSrc}
      alt={alt}
      className={`fixed bg-slate-800}`}
      style={{
        bottom: `${bottom}em`,
        width: `${width}em`,
        right: `${position}%`,
        transform: `scaleX(${
          direction > 0 ? (reversed ? -1 : 1) : reversed ? 1 : -1
        })`,
      }}
    />
  );
};

export default WalkingPet;

import React, { useEffect, useRef, useState } from "react";

const ScrollAppearComponent = ({ children, animationTime = 1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const animationSeconds = 0.12 * animationTime;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : `${10 * animationTime}px`})`, // Adjust the initial and final translateY values
        transition: `opacity ${animationSeconds}s ease-in-out, transform ${animationSeconds}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAppearComponent;

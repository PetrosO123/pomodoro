import "./Progress.css";
import React, { useState, useEffect } from "react";

function Progress() {
  const [progress, setProgress] = useState(100); // Start from 100%

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress > 0) {
          return prevProgress - 0.05; // Correctly decrement the progress
        }
        clearInterval(interval); // Clear interval when progress is 0
        return 0;
      });
    }, 5); // Updates every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="hello">
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        className="circular-progress"
        style={{ "--progress": progress }} // Dynamically update progress
      >
        <circle className="bg"></circle>
        <circle className="fg"></circle>
      </svg>
    </div>
  );
}

export default Progress;

import "./Progress.css";
import React, { useState, useEffect } from "react";

function Progress({
  timeLeft,
  totalSeconds,
  progress,
  setProgress,
  timer,
  color,
}) {
  // Start from 100%
  const colorMapping = {
    1: "#F87070",
    2: "#D7E0FF",
    3: "#D881F8",
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (timeLeft > 0 && totalSeconds > 0 && timer == "on") {
          const newProgress = 100 * (timeLeft / totalSeconds);
          console.log("Updated Progress: ", newProgress);
          console.log("timer: ", timer);
          return newProgress;
        } else if (timeLeft === 0 && timer == "off") {
          clearInterval(interval); //clears interval when timeLeft is 0
          return 0;
        }
        return prevProgress; //keeps current progress if neither condition's met
      });
    }, 1000); //updates every second to reflect each decrement in timeLeft

    return () => clearInterval(interval); //cleans up the interval on component unmount
  }, [timeLeft, totalSeconds, timer]); //includes timeLeft and totalSeconds in the array of dependencies

  return (
    <div className="circular_bar">
      <svg
        width="350"
        height="350"
        viewBox="0 0 250 250"
        className="circular-progress"
        style={{ "--progress": progress }}
      >
        <circle className="bg"></circle>
        <circle
          className="fg"
          style={{ stroke: colorMapping[color] }}
        ></circle>{" "}
      </svg>
    </div>
  );
}

export default Progress;

import "./App.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Progress from "./Progress";

function App() {
  const [currMode, setCurrMode] = useState("pomodoro");
  const [timer, setTimer] = useState("off");
  const [timeLeft, setTimeLeft] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [pomodoro, setPomodoro] = useState(25 * 60);
  const [sb, setSB] = useState(5 * 60);
  const [lb, setLB] = useState(15 * 60);
  const [font, setFont] = useState(1);
  const [color, setColor] = useState(1);
  const [selectedFont, setSelectedFont] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);

  const [pomodoro_setting, setpomodorosetting] = useState(25);
  const [sb_setting, setSBsetting] = useState(5);
  const [lb_setting, setLBsetting] = useState(15);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const [progress, setProgress] = useState(0);

  const colorMapping = {
    1: "#F87070",
    2: "#D7E0FF",
    3: "#D881F8",
  };

  const handleMode = (break_type) => {
    // sets current mode
    setCurrMode(break_type);
    // turns off timer so changing mode stops the clock
    setTimer("off");
    console.log("break_type: ", break_type);
    // different conditional statements
    // to calculate time left based on current mode
    if (break_type === "pomodoro") {
      console.log("pomodoro condition triggered");
      setTimeLeft(pomodoro);
      setTotalSeconds(pomodoro);
      setProgress(100);
    } else if (break_type === "sb") {
      console.log("sb condition triggered");
      setTimeLeft(sb);
      setTotalSeconds(sb);
      setProgress(100);
    } else {
      console.log("lb condition triggered");
      setTimeLeft(lb);
      setTotalSeconds(lb);
      setProgress(100);
    }
  };

  useEffect(() => {
    console.log("timer is now: ", timer);
  }, [timer]); // This useEffect will run every time 'timer' changes.

  const handleTimer = () => {
    if (timer === "off") {
      setTimer("on");
      if (timeLeft === 0) {
        let seconds = 1600;
        setTimeLeft(seconds);
        setTotalSeconds(seconds);
        setProgress(100);
      }
    } else {
      setTimer("off");
    }
  };

  useEffect(() => {
    //Only set the interval if timeLeft is > 0
    // if timer is on we decrement the clock
    if (timeLeft > 0 && timer === "on") {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1); // Decrement time left by 1s
      }, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(timerId);
    }
  }, [timeLeft, timer]);

  useEffect(() => {
    if (font === 1) {
      document.body.style.fontFamily = "Kumbh Sans, sans-serif";
    } else if (font === 2) {
      document.body.style.fontFamily = "Roboto Slab, serif";
    } else {
      document.body.style.fontFamily = "Space Mono, monospace";
    }
    return () => {
      document.body.style.fontFamily = "Kumbh Sans, sans-serif";
    };
  }, [font]);

  return (
    <div className="wrapper">
      <div className="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="153" height="32">
          <path
            fill="#D7E0FF"
            d="M4.578 31.813v-9.36a7.383 7.383 0 004.984 1.86c1.47 0 2.777-.352 3.922-1.055 1.146-.703 2.047-1.667 2.704-2.89.656-1.225.984-2.618.984-4.18 0-1.563-.328-2.956-.985-4.18-.656-1.224-1.557-2.188-2.703-2.89-1.145-.704-2.453-1.056-3.921-1.056-1.01 0-1.954.175-2.829.524a6.985 6.985 0 00-2.296 1.476l-.11-1.687H.078v23.438h4.5zm3.969-11.407c-1.146 0-2.094-.4-2.844-1.203-.75-.802-1.125-1.807-1.125-3.015 0-1.209.375-2.214 1.125-3.016s1.698-1.203 2.844-1.203 2.094.4 2.844 1.203c.75.802 1.125 1.807 1.125 3.015 0 1.209-.375 2.214-1.125 3.016s-1.698 1.203-2.844 1.203zm18.844 3.907c1.604 0 3.03-.352 4.28-1.055a7.85 7.85 0 002.962-2.89c.724-1.225 1.086-2.618 1.086-4.18 0-1.563-.362-2.956-1.086-4.18a7.85 7.85 0 00-2.961-2.89c-1.25-.704-2.677-1.056-4.281-1.056-1.605 0-3.034.352-4.29 1.055a7.834 7.834 0 00-2.968 2.89c-.724 1.225-1.086 2.618-1.086 4.18 0 1.563.362 2.956 1.086 4.18a7.834 7.834 0 002.969 2.89c1.255.704 2.684 1.055 4.289 1.055zm0-3.907c-1.146 0-2.094-.4-2.844-1.203-.75-.802-1.125-1.807-1.125-3.015 0-1.209.375-2.214 1.125-3.016s1.698-1.203 2.844-1.203c1.145 0 2.093.4 2.843 1.203.75.802 1.125 1.807 1.125 3.015 0 1.209-.375 2.214-1.125 3.016s-1.698 1.203-2.843 1.203zM43.188 24v-8.297c0-1.24.286-2.172.859-2.797s1.266-.937 2.078-.937c.802 0 1.487.302 2.055.906.567.604.851 1.51.851 2.719V24h4.5v-8.297c0-1.24.287-2.172.86-2.797s1.265-.937 2.078-.937c.802 0 1.487.302 2.054.906.568.604.852 1.51.852 2.719V24h4.5v-8.406c0-2.365-.526-4.211-1.578-5.54-1.052-1.327-2.526-1.992-4.422-1.992-1.198 0-2.24.266-3.125.797-.885.532-1.589 1.292-2.11 2.282-1-2.052-2.703-3.079-5.109-3.079-1.885 0-3.38.657-4.484 1.97l-.11-1.657h-4.25V24h4.5zm31.687.313c1.604 0 3.031-.352 4.281-1.055a7.85 7.85 0 002.961-2.89c.724-1.225 1.086-2.618 1.086-4.18 0-1.563-.362-2.956-1.086-4.18a7.85 7.85 0 00-2.96-2.89c-1.25-.704-2.678-1.056-4.282-1.056s-3.034.352-4.29 1.055a7.834 7.834 0 00-2.968 2.89c-.724 1.225-1.086 2.618-1.086 4.18 0 1.563.362 2.956 1.086 4.18a7.834 7.834 0 002.969 2.89c1.255.704 2.685 1.055 4.289 1.055zm0-3.907c-1.146 0-2.094-.4-2.844-1.203-.75-.802-1.125-1.807-1.125-3.015 0-1.209.375-2.214 1.125-3.016s1.698-1.203 2.844-1.203 2.094.4 2.844 1.203c.75.802 1.125 1.807 1.125 3.015 0 1.209-.375 2.214-1.125 3.016s-1.698 1.203-2.844 1.203zm17.813 3.907c1.02 0 1.966-.175 2.835-.524a7.005 7.005 0 002.29-1.477L97.921 24h4.25V.562h-4.5v9.36a7.383 7.383 0 00-4.984-1.86c-1.459 0-2.764.352-3.915 1.055a7.433 7.433 0 00-2.71 2.89c-.657 1.225-.985 2.618-.985 4.18 0 1.563.328 2.956.984 4.18a7.433 7.433 0 002.711 2.89c1.151.704 2.456 1.055 3.915 1.055zm1.015-3.907c-1.146 0-2.094-.4-2.844-1.203-.75-.802-1.125-1.807-1.125-3.015 0-1.209.375-2.214 1.125-3.016s1.698-1.203 2.844-1.203 2.094.4 2.844 1.203c.75.802 1.125 1.807 1.125 3.015 0 1.209-.375 2.214-1.125 3.016s-1.698 1.203-2.844 1.203zm19.781 3.907c1.605 0 3.032-.352 4.282-1.055a7.85 7.85 0 002.96-2.89c.725-1.225 1.087-2.618 1.087-4.18 0-1.563-.362-2.956-1.086-4.18a7.85 7.85 0 00-2.961-2.89c-1.25-.704-2.677-1.056-4.282-1.056-1.604 0-3.033.352-4.289 1.055a7.834 7.834 0 00-2.968 2.89c-.724 1.225-1.086 2.618-1.086 4.18 0 1.563.362 2.956 1.086 4.18a7.834 7.834 0 002.968 2.89c1.256.704 2.685 1.055 4.29 1.055zm0-3.907c-1.145 0-2.093-.4-2.843-1.203-.75-.802-1.125-1.807-1.125-3.015 0-1.209.375-2.214 1.125-3.016s1.698-1.203 2.843-1.203c1.146 0 2.094.4 2.844 1.203.75.802 1.125 1.807 1.125 3.015 0 1.209-.375 2.214-1.125 3.016s-1.698 1.203-2.844 1.203zM129.281 24v-6.89c0-1.646.37-2.915 1.11-3.805.74-.89 1.713-1.336 2.922-1.336a5.7 5.7 0 011.78.297l.626-3.891a7.505 7.505 0 00-2.094-.313c-1.99 0-3.552.85-4.688 2.547l-.218-2.234h-3.938V24h4.5zm15.406.313c1.605 0 3.032-.352 4.282-1.055a7.85 7.85 0 002.96-2.89c.725-1.225 1.087-2.618 1.087-4.18 0-1.563-.362-2.956-1.086-4.18a7.85 7.85 0 00-2.961-2.89c-1.25-.704-2.677-1.056-4.281-1.056-1.605 0-3.034.352-4.29 1.055a7.834 7.834 0 00-2.968 2.89c-.724 1.225-1.086 2.618-1.086 4.18 0 1.563.362 2.956 1.086 4.18a7.834 7.834 0 002.968 2.89c1.256.704 2.685 1.055 4.29 1.055zm0-3.907c-1.145 0-2.093-.4-2.843-1.203-.75-.802-1.125-1.807-1.125-3.015 0-1.209.375-2.214 1.125-3.016s1.698-1.203 2.844-1.203c1.145 0 2.093.4 2.843 1.203.75.802 1.125 1.807 1.125 3.015 0 1.209-.375 2.214-1.125 3.016s-1.698 1.203-2.844 1.203z"
          />
        </svg>
      </div>
      <div className="tabs">
        <div
          className={`tab_pomodoro ${currMode === "pomodoro" ? "active" : ""}`}
          onClick={() => handleMode("pomodoro")}
          style={{
            backgroundColor: currMode === "pomodoro" ? colorMapping[color] : "",
            color: currMode === "pomodoro" ? "black" : "",
          }}
        >
          pomodoro
        </div>
        <div
          className={`tab_sb ${currMode === "sb" ? "active" : ""}`}
          onClick={() => handleMode("sb")}
          style={{
            backgroundColor: currMode === "sb" ? colorMapping[color] : "",
            color: currMode === "sb" ? "black" : "",
          }}
        >
          short break
        </div>
        <div
          className={`tab_lb ${currMode === "lb" ? "active" : ""}`}
          onClick={() => handleMode("lb")}
          style={{
            backgroundColor: currMode === "lb" ? colorMapping[color] : "",
            color: currMode === "lb" ? "black" : "",
          }}
        >
          long break
        </div>
      </div>
      <div className="widget_wrapper">
        <div className="widget">
          <div className="progress">
            <div className="progress_text">
              <div
                className="time"
                style={font === 3 ? { fontWeight: 400 } : { fontWeight: 700 }}
              >
                {`${Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}:${(timeLeft % 60)
                  .toString()
                  .padStart(2, "0")}`}
              </div>

              <div className="pause" onClick={handleTimer}>
                {timer === "off" && timeLeft === 0
                  ? "RESTART"
                  : timer === "on"
                  ? "PAUSE"
                  : "PLAY"}
                {/* last condition is if timer is off and time left > 0 */}
              </div>
            </div>
          </div>
        </div>
        <Progress
          totalSeconds={totalSeconds}
          timeLeft={timeLeft}
          progress={progress}
          setProgress={setProgress}
          timer={timer}
          color={color}
        />
      </div>

      <div className="gears" onClick={() => setShowModal(!showModal)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
          <path
            fill="#D7E0FF"
            d="M26.965 17.682l-2.927-2.317c.055-.448.097-.903.097-1.365 0-.462-.042-.917-.097-1.365l2.934-2.317a.702.702 0 00.167-.896l-2.775-4.851a.683.683 0 00-.847-.301l-3.454 1.407a10.506 10.506 0 00-2.345-1.379l-.52-3.71A.716.716 0 0016.503 0h-5.55a.703.703 0 00-.687.588l-.52 3.71c-.847.357-1.63.819-2.345 1.379L3.947 4.27a.691.691 0 00-.847.301L.325 9.422a.705.705 0 00.167.896l2.927 2.317c-.055.448-.097.903-.097 1.365 0 .462.042.917.097 1.365L.492 17.682a.702.702 0 00-.167.896L3.1 23.429a.683.683 0 00.847.301L7.4 22.323a10.506 10.506 0 002.345 1.379l.52 3.71c.056.329.34.588.687.588h5.55a.703.703 0 00.687-.588l.52-3.71c.847-.357 1.631-.819 2.346-1.379l3.454 1.407c.313.119.673 0 .847-.301l2.775-4.851a.705.705 0 00-.167-.896zM13.73 18.9c-2.685 0-4.857-2.191-4.857-4.9 0-2.709 2.172-4.9 4.857-4.9 2.684 0 4.856 2.191 4.856 4.9 0 2.71-2.172 4.9-4.856 4.9z"
            opacity=".5"
          />
        </svg>
      </div>
      {showModal && (
        <Modal
          pomodoro={pomodoro}
          sb={sb}
          lb={lb}
          selectedFont={selectedFont}
          selectedColor={selectedColor}
          setPomodoro={setPomodoro}
          setSB={setSB}
          setLB={setLB}
          setSelectedFont={setSelectedFont}
          setSelectedColor={setSelectedColor}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          currMode={currMode}
          setCurrMode={setCurrMode}
          showModal={showModal}
          setShowModal={setShowModal}
          timer={timer}
          setTimer={setTimer}
          handleMode={handleMode}
          pomodoro_setting={pomodoro_setting}
          sb_setting={sb_setting}
          lb_setting={lb_setting}
          setpomodorosetting={setpomodorosetting}
          setSBsetting={setSBsetting}
          setLBsetting={setLBsetting}
          totalSeconds={totalSeconds}
          setTotalSeconds={setTotalSeconds}
          color={color}
          setColor={setColor}
          font={font}
          setFont={setFont}
          progress={progress}
          setProgress={setProgress}
        />
      )}
    </div>
  );
}

export default App;

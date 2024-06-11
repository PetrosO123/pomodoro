import "./Modal.css";
import { useState, useEffect } from "react";

function Modal({
  pomodoro,
  sb,
  lb,
  selectedFont,
  selectedColor,
  setPomodoro,
  setSB,
  setLB,
  setSelectedFont,
  setSelectedColor,
  timeLeft,
  setShowModal,
  currMode,
  setCurrMode,
  timer,
  setTimer,
  handleMode,
  setTimeLeft,
  pomodoro_setting,
  sb_setting,
  lb_setting,
  setpomodorosetting,
  setSBsetting,
  setLBsetting,
  totalSeconds,
  setTotalSeconds,
  color,
  setColor,
  font,
  setFont,
  setProgress,
}) {
  const handlePomoUp = () => {
    setpomodorosetting(pomodoro_setting + 1);
  };
  const handlePomoDown = () => {
    if (pomodoro_setting === 1) {
      return;
    }
    setpomodorosetting(pomodoro_setting - 1);
  };
  const handlesbUp = () => {
    setSBsetting(sb_setting + 1);
  };
  const handlesbDown = () => {
    if (sb_setting === 1) {
      return;
    }
    setSBsetting(sb_setting - 1);
  };
  const handlelbUp = () => {
    setLBsetting(lb_setting + 1);
  };
  const handlelbDown = () => {
    if (lb_setting === 1) {
      return;
    }
    setLBsetting(lb_setting - 1);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    const new_pomodoro = pomodoro_setting * 60;
    const new_sb = sb_setting * 60;
    const new_lb = lb_setting * 60;
    setPomodoro(new_pomodoro);
    setSB(new_sb);
    setLB(new_lb);
    setShowModal(false);
    setColor(selectedColor);
    setFont(selectedFont);
    setProgress(100);
    if (currMode == "pomodoro") {
      setTimeLeft(new_pomodoro);
      setTotalSeconds(new_pomodoro);
    } else if (currMode === "sb") {
      setTimeLeft(new_sb);
      setTotalSeconds(new_sb);
    } else {
      setTimeLeft(new_lb);
      setTotalSeconds(new_lb);
    }
  };

  return (
    <div className="modalWrapper">
      <div className="modal">
        <header>
          <div className="settings">Settings</div>
          <div className="close" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path
                fill="#1E213F"
                fill-rule="evenodd"
                d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
                opacity=".5"
              />
            </svg>
          </div>
        </header>
        <hr class="grey-line" />
        <div className="time_settings">
          <div className="time_header spaced">TIME (MINUTES)</div>
          <div className="time_grid">
            <div className="tg_pomodoro">pomodoro</div>
            <div className="tg_sb">short break</div>
            <div className="tg_lb">long break</div>
            <div className="bar1">
              <div className="number1">{pomodoro_setting}</div>
              <div className="arrows">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  onClick={handlePomoUp}
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    stroke-opacity=".25"
                    stroke-width="2"
                    d="M1 6l6-4 6 4"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  onClick={handlePomoDown}
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    stroke-opacity=".25"
                    stroke-width="2"
                    d="M1 1l6 4 6-4"
                  />
                </svg>
              </div>
            </div>
            <div className="bar2">
              <div className="number2">{sb_setting}</div>
              <div className="arrows">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  onClick={handlesbUp}
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    stroke-opacity=".25"
                    stroke-width="2"
                    d="M1 6l6-4 6 4"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  onClick={handlesbDown}
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    stroke-opacity=".25"
                    stroke-width="2"
                    d="M1 1l6 4 6-4"
                  />
                </svg>
              </div>
            </div>

            <div className="bar3">
              <div className="number3">{lb_setting}</div>
              <div className="arrows">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  onClick={handlelbUp}
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    stroke-opacity=".25"
                    stroke-width="2"
                    d="M1 6l6-4 6 4"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                  onClick={handlelbDown}
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    stroke-opacity=".25"
                    stroke-width="2"
                    d="M1 1l6 4 6-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <hr class="grey-line" />
        <div className="font-section">
          <div className="font spaced">FONT</div>
          <div className="font-selection">
            <div
              className={`firstAs ${selectedFont === 1 ? "black" : ""}`}
              onClick={() => setSelectedFont(1)}
            >
              Aa
            </div>
            <div
              className={`secondAs ${selectedFont === 2 ? "black" : ""}`}
              onClick={() => setSelectedFont(2)}
            >
              Aa
            </div>
            <div
              className={`thirdAs ${selectedFont === 3 ? "black" : ""}`}
              onClick={() => setSelectedFont(3)}
            >
              Aa
            </div>
          </div>
        </div>
        <hr class="grey-line" />
        <div className="color-section">
          <div className="color spaced">COLOR</div>
          <div className="color-selection">
            <div
              className={`fuschia ${selectedColor === 1 ? "selected" : ""}`}
              onClick={() => setSelectedColor(1)}
            ></div>
            <div
              className={`teal ${selectedColor === 2 ? "selected" : ""}`}
              onClick={() => setSelectedColor(2)}
            ></div>
            <div
              className={`purple ${selectedColor === 3 ? "selected" : ""}`}
              onClick={() => setSelectedColor(3)}
            ></div>
          </div>
        </div>

        <div className="apply" onClick={handleSubmit}>
          Apply
        </div>
      </div>
    </div>
  );
}

export default Modal;

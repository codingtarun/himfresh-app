import { useRef, useState } from "react";

export const TimerBoard = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    console.log("STOP");
  }
  return (
    <>
      <div className="card border-0 shadow-sm my-4">
        <div className="card-body">
          <h5 className="card-title text-center text-uppercase mb-4">
            {title}
          </h5>
          <p className="card-text text-center">
            {timerExpired ? "You lost" : "You won"}
          </p>
          <p className="card-text text-center border d-block mb-4">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <button
            className="btn btn-primary w-100 mb-4"
            onClick={timerStarted ? handleStop : handleStart}
          >
            {timerStarted ? "Stop" : "Start"} Challange
          </button>
          <p className="card-text text-center">
            {timerStarted ? "Time is running" : "Timer Inactive"}
          </p>
        </div>
      </div>
    </>
  );
};

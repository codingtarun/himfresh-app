import { useRef, useState } from "react";
import "./timer.scss";
import { TimerBoard } from "./TimerBoard";

export const Timer = () => {
  const userName = useRef();

  const [namesubmitted, setNamesubmitted] = useState(false);

  function handleClick() {
    setNamesubmitted(userName.current.value);
    userName.current.value = "";
  }
  return (
    <div id="timer" className="border-bottom">
      <h1 className="text-center">Timer App</h1>
      <div className="card border-0 shadow-sm my-2">
        <div className="card-body">
          <h3 className="card-title text-center text-uppercase">
            The Almost final countdown
          </h3>
          <p className="card-text text-center small">
            Stop the timer once you estiimate that time is (almost) up.
          </p>
          <h2 className="text-center">
            Welcome {namesubmitted ?? "Player name"}
          </h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              aria-label="usernsme"
              aria-describedby="username"
              id="username"
              ref={userName}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="btnUsername"
              onClick={handleClick}
            >
              Set Name
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <TimerBoard title="Easy" targetTime={1}>
            <h1>Timer Board</h1>
          </TimerBoard>
        </div>
        <div className="col-6">
          <TimerBoard title="Not Easy" targetTime={4}>
            <h1>Timer Board</h1>
          </TimerBoard>
        </div>
        <div className="col-6">
          <TimerBoard title="Getting tough" targetTime={8}>
            <h1>Timer Board</h1>
          </TimerBoard>
        </div>
        <div className="col-6">
          <TimerBoard title="Pros only" targetTime={10}>
            <h1>Timer Board</h1>
          </TimerBoard>
        </div>
      </div>
    </div>
  );
};

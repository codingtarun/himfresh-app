import { useEffect, useState } from "react";

import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { Navbar } from "./Navbar";

import "./taskmanager.scss";

export const TaskManger = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [task, setTask] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <div
      id="taskmanager"
      className={`${
        theme === "dark" ? "bg-dark " : ""
      } container-fluid d-flex flex-column align-items-center`}
    >
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      ></AddTask>
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      ></TaskList>
    </div>
  );
};

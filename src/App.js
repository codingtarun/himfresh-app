import { Routes, Route } from "react-router";
import { Content } from "./components/content/Content";
import { Login } from "./components/login/Login";
import { Profile } from "./components/profile/Profile";
import { Register } from "./components/register/Register";
import { Dashboard } from "./components/dashboard/Dashboard";
import { TicTacToe } from "./components/tic-tac-toe/TicTacToe";
import { Investment } from "./components/investment/Investment";
import { ProjectManager } from "./components/projectmanager/ProjectManager";
import { Timer } from "./components/timer/Timer";
import { User } from "./components/user/User";
import { TaskManger } from "./components/taskmanager/TaskManager";

import "./sass/App.scss";
import { Menu } from "./components/menu/Menu";

function App() {
  return (
    <>
      <Content>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/taskmanager" element={<TaskManger />}></Route>
          <Route path="/users" element={<User></User>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/dashboard"
            element={<Dashboard id="dashboard"></Dashboard>}
          ></Route>
          <Route path="/tic-tac-toe" element={<TicTacToe></TicTacToe>}></Route>
          <Route path="/investment" element={<Investment></Investment>}></Route>
          <Route path="/timer" element={<Timer></Timer>}></Route>
          <Route
            path="/project-manager"
            element={<ProjectManager></ProjectManager>}
          ></Route>
        </Routes>
      </Content>
      <Menu></Menu>
    </>
  );
}

export default App;

import { Content } from "./components/content/Content";
import "./sass/App.scss";
import { Login } from "./components/login/Login";
import { Profile } from "./components/profile/Profile";
import { Register } from "./components/register/Register";
import { Dashboard } from "./components/dashboard/Dashboard";
import { TicTacToe } from "./components/tic-tac-toe/TicTacToe";
import { Investment } from "./components/investment/Investment";
import { ProjectManager } from "./components/projectmanager/ProjectManager";
import { Navbar } from "./components/navbar/Navbar";
import { Timer } from "./components/timer/Timer";
import { User } from "./components/user/User";
import { TaskManger } from "./components/taskmanager/TaskManager";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Content>
        <TaskManger></TaskManger>
        <User></User>
        <Profile></Profile>
        <Login></Login>
        <Register></Register>
        <Dashboard id="dashboard"></Dashboard>
        <TicTacToe></TicTacToe>
        <Investment></Investment>
        <Timer></Timer>
        <ProjectManager></ProjectManager>
      </Content>
    </div>
  );
}

export default App;

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

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Content>
        <Profile></Profile>
        <Login></Login>
        <Register></Register>
        <Dashboard id="dashboard"></Dashboard>
        <TicTacToe></TicTacToe>
        <Investment></Investment>
        <Timer></Timer>
        {/* <ProjectManager></ProjectManager> */}
      </Content>
    </>
  );
}

export default App;

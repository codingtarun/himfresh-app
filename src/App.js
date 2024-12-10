import { Content } from "./components/content/Content";
import "./sass/App.scss";
import { Login } from "./components/login/Login";
import { Profile } from "./components/profile/Profile";
import { Register } from "./components/register/Register";
import { Dashboard } from "./components/dashboard/Dashboard";
import { TicTacToe } from "./components/tic-tac-toe/TicTacToe";
import { Investment } from "./components/investment/Investment";

function App() {
  return (
    <>
      <Content>
        <Profile></Profile>
        <Login></Login>
        <Register></Register>
        <Dashboard id="dashboard"></Dashboard>
        <TicTacToe></TicTacToe>
        <Investment></Investment>
      </Content>
    </>
  );
}

export default App;

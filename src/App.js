import { Routes, Route } from "react-router";
import { Login } from "./views/login/Login";
import { Profile } from "./components/profile/Profile";
import { Register } from "./components/register/Register";
import { Dashboard } from "./views/dashboard/Dashboard";
import { TicTacToe } from "./views/tic-tac-toe/TicTacToe";
import { Investment } from "./components/investment/Investment";
import { ProjectManager } from "./components/projectmanager/ProjectManager";
import { Timer } from "./views/timer/Timer";
import { User } from "./views/user/User";
import { TaskManger } from "./views/taskmanager/TaskManager";

import "./sass/App.scss";
import { Mobi } from "./views/mobi/Mobi";
import { MobiDetails } from "./views/mobi/MobiDetails";
import { Default } from "./template/Default";

function App() {
  return (
    <Default>
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
        <Route
          path="/mobi"
          element={<Mobi api_link="trending/all/day?language=en-US"></Mobi>}
        ></Route>
        <Route
          path="/mobi/movies"
          element={<Mobi api_link="trending/movie/day?language=en-US"></Mobi>}
        ></Route>
        <Route
          path="/mobi/tv"
          element={<Mobi api_link="trending/tv/day?language=en-US"></Mobi>}
        ></Route>
        <Route
          path="/mobi/tv/top-rated"
          element={<Mobi api_link="tv/top_rated?language=en-US&page=1"></Mobi>}
        ></Route>
        <Route
          path="/mobi/details"
          element={<MobiDetails></MobiDetails>}
        ></Route>
      </Routes>
    </Default>
  );
}

export default App;

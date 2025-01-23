import { Routes, Route } from "react-router";
import { useState } from "react";

import { Login } from "./views/login/Login";
import { Profile } from "./views/profile/Profile";
import { Register } from "./views/register/Register";
import { Dashboard } from "./views/dashboard/Dashboard";
import { TicTacToe } from "./views/tic-tac-toe/TicTacToe";
import { Investment } from "./views/investment/Investment";
import { ProjectManager } from "./views/projectmanager/ProjectManager";
import { Timer } from "./views/timer/Timer";
import { User } from "./views/user/User";
import { TaskManger } from "./views/taskmanager/TaskManager";
import { Mobi } from "./views/mobi/Mobi";
import { MobiDetails } from "./views/mobi/MobiDetails";
import { Default } from "./template/Default";
import { PageNotFound } from "./views/pagenotfound/PageNotFound";
import { MobiSearchResult } from "./views/mobi/MobiSearchResult";

import "./sass/App.scss";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Default theme={theme} setTheme={setTheme}>
      <Routes>
        <Route
          path="/"
          element={<Dashboard title="Dashboard" theme={theme} />}
        ></Route>
        <Route
          path="/taskmanager"
          element={<TaskManger title="Taskmanager" theme={theme} />}
        ></Route>
        <Route
          path="/users"
          element={<User title="Users" theme={theme}></User>}
        ></Route>
        <Route
          path="/profile"
          element={<Profile title="Profile"></Profile>}
        ></Route>
        <Route path="/login" element={<Login title="Login"></Login>}></Route>
        <Route
          path="/register"
          element={<Register title="Register"></Register>}
        ></Route>
        <Route
          path="/dashboard"
          element={<Dashboard id="dashboard" title="Dashboard"></Dashboard>}
        ></Route>
        <Route
          path="/tic-tac-toe"
          element={<TicTacToe title="Games"></TicTacToe>}
        ></Route>
        <Route
          path="/investment"
          element={<Investment title="Investment"></Investment>}
        ></Route>
        <Route path="/timer" element={<Timer title="Timer"></Timer>}></Route>
        <Route
          path="/project-manager"
          element={<ProjectManager title="Project Manager"></ProjectManager>}
        ></Route>
        <Route
          path="/mobi"
          element={
            <Mobi api_link="trending/all/day?language=en-US" title="All"></Mobi>
          }
        ></Route>
        <Route
          path="/mobi/movies"
          element={
            <Mobi
              api_link="trending/movie/day?language=en-US"
              title="Popular Movies"
            ></Mobi>
          }
        ></Route>
        <Route
          path="/mobi/tv"
          element={
            <Mobi
              api_link="trending/tv/day?language=en-US"
              title="Popular Tv Shows"
            ></Mobi>
          }
        ></Route>
        <Route
          path="/mobi/tv/top-rated"
          element={
            <Mobi
              api_link="tv/top_rated?language=en-US&page=1"
              title="Top Rated"
            ></Mobi>
          }
        ></Route>
        <Route
          path="/mobi/movies/search"
          element={
            <MobiSearchResult
              api_link="search/movie?include_adult=false&language=en-US&page=1"
              title="Search Movies"
            ></MobiSearchResult>
          }
        ></Route>
        <Route
          path="/mobi/details/:media_type/:id"
          element={<MobiDetails></MobiDetails>}
        ></Route>
        <Route
          path="*"
          element={<PageNotFound title="Page Not Found"></PageNotFound>}
        ></Route>
      </Routes>
    </Default>
  );
}

export default App;

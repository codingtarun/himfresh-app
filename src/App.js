import { Content } from "./components/content/Content";
import "./sass/App.scss";
import { Login } from "./components/login/Login";
import { Profile } from "./components/profile/Profile";
import { Register } from "./components/register/Register";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Content>
        <Profile></Profile>
        <Login></Login>
        <Register></Register>
        <Dashboard></Dashboard>
      </Content>
    </>
  );
}

export default App;

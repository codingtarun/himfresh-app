// Components
import { Card } from "./components/card/Card";
import { Content } from "./components/content/Content";
import { Navbar } from "./components/navbar/Navbar";
import { Row } from "./components/grid/Row";

// Data
import { USER_LIST } from "./data";

// Assets
import "./sass/App.scss";
import { useState } from "react";
import { Login } from "./components/login/Login";

function App() {
  const [heading, setHeading] = useState("Himfresh App");
  function updateHeading(name) {
    setHeading(name);
  }
  return (
    <>
      <Navbar />
      <Content>
        <h2 className="text-center">{heading}</h2>
        <Row>
          {USER_LIST.map((user) => (
            <div className="col-6 col-sm-4 col-md-3 mb-3">
              <Card key={user.id} handleClick={updateHeading} {...user} />
            </div>
          ))}
        </Row>
        <hr />
        <Login></Login>
      </Content>
    </>
  );
}

export default App;

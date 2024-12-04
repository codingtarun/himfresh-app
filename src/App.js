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
          <div className="col-6 col-sm-3">
            <Card handleClick={updateHeading} {...USER_LIST[0]} />
          </div>
          <div className="col-6 col-sm-3">
            <Card handleClick={updateHeading} {...USER_LIST[1]} />
          </div>
          <div className="col-6 col-sm-3">
            <Card handleClick={updateHeading} {...USER_LIST[2]} />
          </div>
          <div className="col-6 col-sm-3">
            <Card handleClick={updateHeading} {...USER_LIST[3]} />
          </div>
        </Row>
      </Content>
    </>
  );
}

export default App;

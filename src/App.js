// Components
import { Card } from "./components/card/Card";
import { Content } from "./components/content/Content";
import { Navbar } from "./components/navbar/Navbar";
import { Row } from "./components/row/Row";

// Data
import { USER_LIST } from "./data";

// Assets
import "./sass/App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Content>
        <Row>
          <div className="col-6">
            <Card {...USER_LIST[0]} />
          </div>
          <div className="col-6">
            <Card {...USER_LIST[1]} />
          </div>
        </Row>
      </Content>
    </>
  );
}

export default App;

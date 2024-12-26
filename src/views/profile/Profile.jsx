import { useState } from "react";
import { Col } from "../../components/grid/Col";
import { Row } from "../../components/grid/Row";
import { Card } from "../../components/card/Card";
import { USER_LIST } from "../../data";

export const Profile = () => {
  const [heading, setHeading] = useState("Himfresh App");
  function updateHeading(name) {
    setHeading(name);
  }
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center"
      id="profile"
    >
      <h2 className="text-center">{heading}</h2>
      <Row>
        {USER_LIST.map((user, userIndex) => (
          <Col className="col-6 col-sm-6 col-md-3 mb-3" key={userIndex}>
            <Card key={user.id} handleClick={updateHeading} {...user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

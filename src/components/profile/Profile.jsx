import { useState } from "react";
import { Col } from "../grid/Col";
import { Row } from "../grid/Row";
import { Card } from "../card/Card";
import { USER_LIST } from "./../../data";

export const Profile = () => {
  const [heading, setHeading] = useState("Himfresh App");
  function updateHeading(name) {
    setHeading(name);
  }
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center">
      <h2 className="text-center">{heading}</h2>
      <Row>
        {USER_LIST.map((user) => (
          <Col className="col-6 col-sm-4 col-md-3 mb-3">
            <Card key={user.id} handleClick={updateHeading} {...user} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

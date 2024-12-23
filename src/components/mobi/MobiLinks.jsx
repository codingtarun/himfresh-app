import { Link } from "react-router";
import { Row } from "../grid/Row";
import { Col } from "../grid/Col";
export const MobiLinks = () => {
  return (
    <Row>
      <Col className="col-12">
        <div className="btn-group w-100">
          <Link to="/mobi" className="btn btn-outline-secondary">
            All
          </Link>
          <Link to="/mobi/movies" className="btn btn-outline-secondary">
            Movies
          </Link>
          <Link to="/mobi/tv" className="btn btn-outline-secondary">
            TV Series
          </Link>
          <Link to="/mobi/tv/top-rated" className="btn btn-outline-secondary">
            Top Rated
          </Link>
        </div>
      </Col>
    </Row>
  );
};

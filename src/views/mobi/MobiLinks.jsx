import { Link } from "react-router";
import { Col } from "../../components/grid/Col";
export const MobiLinks = () => {
  return (
    <Col className="col-6">
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
      </div>
    </Col>
  );
};

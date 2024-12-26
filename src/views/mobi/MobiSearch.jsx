import { Row } from "../../components/grid/Row";
import { Col } from "../../components/grid/Col";
export const MobiSearch = () => {
  return (
    <Row>
      <Col className="col-12">
        <form action="">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search"
            />
            <button className="btn btn-primary" id="search">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
};

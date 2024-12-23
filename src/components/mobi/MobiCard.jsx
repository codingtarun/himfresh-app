import { Col } from "../grid/Col";
import { Link } from "react-router";
export const MobiCard = ({ movie }) => {
  const { id, poster_path, title, overview } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : `https://placehold.co/400x600`;
  return (
    <Col
      className="col-sm-6 col-md-4 my-2 d-flex align-items-stretch justify-content-center"
      key={id}
    >
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
        </div>
        <div className="card-footer mt-auto border-0">
          <Link to={`/mobi/details`} className="btn btn-primary w-100">
            View
          </Link>
        </div>
      </div>
    </Col>
  );
};

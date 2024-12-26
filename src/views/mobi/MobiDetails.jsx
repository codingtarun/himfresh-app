import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Row } from "../../components/grid/Row";
import { Col } from "../../components/grid/Col";
import { MobiLinks } from "./MobiLinks";
import { MobiSearch } from "./MobiSearchBar";

export const MobiDetails = (title) => {
  const { id, media_type } = useParams();
  console.log(id, media_type);

  const link = `https://api.themoviedb.org/3/${media_type}/${id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  };
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(link, options);
      const data = await response.json();
      setMovie(data);
    }
    fetchDetails();
  }, []);

  const { original_title, vote_average, poster_path, overview } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : `https://placehold.co/400x600`;
  useEffect(() => {
    document.title = `Mobi | ${title}`;
  });
  return (
    <div
      id="mobi"
      className="container d-flex flex-column justify-content-center align-items-between"
    >
      <Row>
        <MobiLinks></MobiLinks>
        <MobiSearch></MobiSearch>
      </Row>
      <Row>
        <Col className="col-sm-6">
          <img src={image} alt={original_title} className="img-fluid" />
        </Col>
        <Col className="col-sm-6">
          <h2>{original_title}</h2>
          <p>{vote_average}/10</p>
          <p>{overview}</p>
        </Col>
      </Row>
    </div>
  );
};

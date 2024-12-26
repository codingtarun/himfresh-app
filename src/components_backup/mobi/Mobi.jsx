import { Row } from "../grid/Row";
import { MobiCard } from "./MobiCard";
import { useFetch } from "../../hooks/useFetch";

import { MobiLinks } from "./MobiLinks";
import { MobiSearch } from "./MobiSearch";
import "./mobi.scss";

export const Mobi = ({ api_link }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: ` ${process.env.REACT_APP_API_KEY}`,
    },
  };
  const link = `https://api.themoviedb.org/3/${api_link}`;

  const { data: movies } = useFetch(link, options);
  console.log(movies);

  return (
    <div
      id="mobi"
      className="container d-flex flex-column justify-content-center align-items-between"
    >
      <MobiLinks></MobiLinks>
      <MobiSearch></MobiSearch>
      <Row>
        {movies.map((movie) => (
          <MobiCard movie={movie}></MobiCard>
        ))}
      </Row>
    </div>
  );
};

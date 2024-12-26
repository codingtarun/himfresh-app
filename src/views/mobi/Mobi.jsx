import { Row } from "../../components/grid/Row";
import { MobiCard } from "./MobiCard";
import { useFetch } from "../../hooks/useFetch";

import { MobiLinks } from "./MobiLinks";
import { MobiSearch } from "./MobiSearchBar";
import "./mobi.scss";
import { useEffect } from "react";

export const Mobi = ({ api_link, title }) => {
  useEffect(() => {
    document.title = `Mobi | ${title}`;
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${process.env.REACT_APP_API_KEY}`,
    },
  };
  const link = `https://api.themoviedb.org/3/${api_link}`;

  const { data: movies } = useFetch(link, options);

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
        {movies.map((movie) => (
          <MobiCard movie={movie}></MobiCard>
        ))}
      </Row>
    </div>
  );
};

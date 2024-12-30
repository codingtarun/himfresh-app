import { Row } from "../../components/grid/Row";
import { MobiLinks } from "./MobiLinks";
import { MobiSearch } from "./MobiSearchBar";
import { MobiCard } from "./MobiCard";
import { useEffect, useState } from "react";
export const MobiSearchResult = ({ api_link, title }) => {
  useEffect(() => {
    document.title = `Mobi | ${title}`;
  });
  const [movies, setMovies] = useState([]);
  return (
    <>
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
    </>
  );
};

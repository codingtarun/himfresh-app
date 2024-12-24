import { useFetch } from "../../hooks/useFetch";
export const MobiDetails = () => {
  const link = "https://api.themoviedb.org/3/review/91363";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: ` ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };
  const { data: movie } = useFetch(link, options);

  return (
    <div>
      <h1>Mobi Details</h1>
      <p>Details for mobi with id:</p>
    </div>
  );
};

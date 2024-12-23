import { useState } from "react";
import { useEffect } from "react";
export const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};

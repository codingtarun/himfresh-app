import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(url);
      const result = await responce.json();
      setData(result);
    };
    fetchData();
  }, [url]);
  console.log(data);
  return data;
};

import { useEffect, useState } from "react";
export function useFetch(fetchFn) {
  const [fetchData, setFetchedData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const userPlaces = await fetchFn();
        setFetchedData(userPlaces);
      } catch (error) {
        setError({ message: "Failed to fetch user places" });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return { fetchData, isFetching, error, setFetchedData };
}

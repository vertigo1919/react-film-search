import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getFilmByTitle from "../api-fetcher";
import SearchBar from "./FilmMainComponents/SearchBar";
import FilmList from "./FilmMainComponents/FilmList";

function FilmMain() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const submittedQuery = searchParams.get("q") ?? "";

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setQuery(submittedQuery);
  }, [submittedQuery]);

  useEffect(() => {
    if (!submittedQuery.trim()) {
      setIsLoading(false);
      setError(null);
      setSearchResults([]);
      return;
    }
    fetchFilmResults(submittedQuery);
  }, [submittedQuery]);

  async function fetchFilmResults(submittedQuery) {
    setError(null);
    setIsLoading(true);
    setSearchResults([]);

    try {
      const data = await getFilmByTitle(submittedQuery);
      setSearchResults(data.description);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't fetch films");
    } finally {
      setIsLoading(false);
    }
  }

  function submitHandler(q) {
    setSearchParams({ q });
  }

  function clearHandler() {
    setSearchParams({});
  }

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        submitHandler={submitHandler}
        clearHandler={clearHandler}
      ></SearchBar>
      {isLoading && <p>Loading…</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <FilmList searchResults={searchResults}></FilmList>
      )}
    </>
  );
}

export default FilmMain;

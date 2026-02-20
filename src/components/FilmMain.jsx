import { useState, useEffect } from "react";
import getFilmByTitle from "../api-fetcher";
import SearchBar from "./FilmMainComponents/SearchBar";
import FilmList from "./FilmMainComponents/FilmList";
import FilmCard from "./FilmMainComponents/FilmCard";

function FilmMain() {
  const [query, setQuery] = useState("inception");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchFilmResults(submittedQuery);
  }, [submittedQuery]);

  async function fetchFilmResults(submittedQuery) {
    setError(null);
    setSearchResults([]);

    try {
      const data = await getFilmByTitle(submittedQuery);
      setSearchResults(data.description);
    } catch (err) {
      setError("Coulnd't fetch films", err);
    }
  }

  console.log("xxxxx", searchResults);

  async function submitHandler(query) {
    setSubmittedQuery(query);
  }

  async function clearHandler() {
    setQuery("");
    setSubmittedQuery("");
    setSearchResults([]);
    setError(null);
  }

  async function randomHandler(query) {
    setSubmittedQuery(query);
  }

  /* 
        A add buttons
        B) Clear button to clear serach bar (to reset {query})
        C) "Clear all" button to clear film results
        C) Random button
        D) Collapse all button 
        - isloading
        - full imdb details
        - routing
        - debouncing
*/

  return (
    <main>
      <SearchBar
        query={query}
        setQuery={setQuery}
        submitHandler={submitHandler}
        randomHandler={randomHandler}
        clearHandler={clearHandler}
      ></SearchBar>
      <FilmList searchResults={searchResults}></FilmList>
    </main>
  );
}

export default FilmMain;

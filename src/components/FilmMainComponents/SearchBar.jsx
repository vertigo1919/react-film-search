import { useState } from "react";

function SearchBar({
  query,
  setQuery,
  submitHandler,
  randomHandler,
  clearHandler,
}) {
  return (
    <section className="search-section">
      <h2> SearchBar </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(query);
        }}
        className="search-form"
      >
        <input
          className="main-input"
          type="text"
          required
          placeholder="e.g. Inception"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <menu className="search-buttons">
          <button className="search-button" type="submit">
            Search
          </button>
          <button type="button" onClick={() => randomHandler()}>
            Random
          </button>
          <button type="button" onClick={() => clearHandler()}>
            Clear
          </button>
        </menu>
      </form>
    </section>
  );
}

export default SearchBar;

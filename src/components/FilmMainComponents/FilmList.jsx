import { useState } from "react";
import filmListBuilder from "../film-list-builder";
import FilmCard from "./FilmCard";

function FilmList({ searchResults }) {
  return (
    <section className="film-main-box">
      {searchResults.length > 0 && (
        <h3 className="search-results-title">Results</h3>
      )}
      <div className="film-cards">
        {filmListBuilder(searchResults).map((item) => {
          return <FilmCard key={item.imdb_ID} item={item} />;
        })}
      </div>
    </section>
  );
}

export default FilmList;

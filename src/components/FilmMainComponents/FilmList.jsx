import { useState } from "react";
import filmListBuilder from "../film-list-builder";
import FilmCard from "./FilmCard";

function FilmList({ searchResults }) {
  return (
    <section className="film-main-box">
      <div className="film-results-top-bar">top bar</div>
      <div className="film-cards">
        {/* The bit below is now working!

        We can now swap the content of the return at line 17 with 
        the code below then start building the card from FilmList.jsx
        <Film Card key={item.imdb_ID item={item}/>
        and then build the card from FilmList.jsx

          */}

        {filmListBuilder(searchResults).map((item) => {
          return (
            // <ul key={item.imdb_id}>
            //   <li>{item.title}</li>
            // </ul>

            <FilmCard key={item.imdb_ID} item={item} />
          );
        })}
      </div>
    </section>
  );
}

export default FilmList;

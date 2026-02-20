import { useState } from "react";
import FilmList from "./FilmList";
import { Link } from "react-router-dom";

function FilmCard({ item }) {
  return (
    <article>
    <div className="ilm-card-top-bar">
      <button className="film-card-ca-btn">collapse</button>
      
      <h3 className="film-card-title">
        {item.title} ({item.year}){" "}
      </h3>
    </div>
    <div className="Film-card-main">       
        <img
          className="film-card-poster"
          src={item.poster}
          alt="movie-poster"
        ></img>
     
      <div className="film-card-basic-info">
        <p>Actors: {item.actors} </p>
        <p>Year: {item.year} </p>
        <p>Ranking: {item.rank} </p>
        <p>IMDB JSON: {item.imdb_JSON} </p>
    </div>
  
      </div>
      <menu className="film-card-buttons">
        <a href={item.imdb_URL}>Link to IMDB page</a>
        {/* <Link to="/details"> Full Details </Link> */}

        <Link to={`/details/${item.imdb_ID}`}>Full Details</Link>

        <a href={item.trailer_URL}>Play trailer</a>

        <Link to="/details"> </Link>
      </menu>
    </article>
  );
}

export default FilmCard;

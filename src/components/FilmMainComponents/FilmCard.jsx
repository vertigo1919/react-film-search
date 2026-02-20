import { Link } from "react-router-dom";

function FilmCard({ item }) {
  return (
    <article>
      <div className="ilm-card-top-bar">
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
          <div className="detail-row">
            <div className="label">Actors</div>
            <div className="value">{item.actors}</div>
          </div>

          <div className="detail-row">
            <div className="label">Year</div>
            <div className="value">{item.year}</div>
          </div>

          <div className="detail-row">
            <div className="label">Rank</div>
            <div className="value">{item.rank}</div>
          </div>
        </div>
      </div>
      <menu className="film-card-buttons">
        <a href={item.imdb_URL} target="_blank" rel="noopener noreferrer">
          Link to IMDB page
        </a>
        <Link to={`/details/${item.imdb_ID}`}>Full Details</Link>
        <a href={item.trailer_URL} target="_blank" rel="noopener noreferrer">
          Play trailer
        </a>
      </menu>
    </article>
  );
}

export default FilmCard;

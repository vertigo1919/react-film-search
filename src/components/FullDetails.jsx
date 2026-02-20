import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getFullImdbDetails from "../full-dts-api-fetcher";
import buildFullImdbDetails from "./full-IMDB-dts-builder";

function FullDetails() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFullIMDBDetails(id);
  }, [id]);

  async function fetchFullIMDBDetails(id) {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const rawData = await getFullImdbDetails(id);

      setData(await buildFullImdbDetails(rawData));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Couldn't fetch full details"
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <>
      <h2>Film Details</h2>
      <article>
        <div>
          <img className="full-film-card-poster" src={data.posterURL}></img>
          <p className="full-film-card-plot">{data.plot}</p>
          <p className="full-film-card-dir">{data.director}</p>
          <p className="full-film-card-runTime">{data.runTime}</p>
          <p className="full-film-card-ageRating">{data.ageRating}</p>
        </div>
      </article>
    </>
  );
}

export default FullDetails;

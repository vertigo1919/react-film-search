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
      <article className="details-card">
        <div className="details-grid">
          <img className="full-film-card-poster" src={data.posterURL} alt="" />

          <div className="details-rows">
            <div className="detail-row">
              <div className="label">Plot</div>
              <div className="value">{data.plot}</div>
            </div>

            <div className="detail-row">
              <div className="label">Director</div>
              <div className="value">{data.director}</div>
            </div>

            <div className="detail-row">
              <div className="label">Runtime</div>
              <div className="value">{data.runTime}</div>
            </div>

            <div className="detail-row">
              <div className="label">Rating</div>
              <div className="value">{data.ageRating}</div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default FullDetails;

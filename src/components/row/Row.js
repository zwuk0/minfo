import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Row.scss";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <div>
            <img
              className={`row__img ${isLargeRow && "row__img-large"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;

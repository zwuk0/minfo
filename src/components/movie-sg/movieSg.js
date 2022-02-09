import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MovieSg = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(
        `movie/${id}?api_key=270e8a8821c1433d75f35e9976c148b4&language=en-US`
      );
      setMovie(request.data);
      return request;
    }
    console.log(fetchMovie());
  }, [id]);
  return (
    <div>
      <span>ID:{id}</span>
      <br />
      <span>Name: {movie.original_title}</span>
    </div>
  );
};

export default MovieSg;

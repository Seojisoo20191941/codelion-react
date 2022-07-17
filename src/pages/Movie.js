import React from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../movie_data";
const Movie = () => {
  const params = useParams();
  const movie = getMovie(parseInt(params.movieId));
  return (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.director}</p>
      <p>{movie.category}</p>
    </>
  );
};

export default Movie;

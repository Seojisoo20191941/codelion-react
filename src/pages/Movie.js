import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";
const Movie = () => {
  //URL 파라미터
  const params = useParams();
  const movie = getMovie(parseInt(params.movieId));

  //쿼리스트링
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
  };
  return (
    <>
      <h2>{movie.title}</h2>
      <p>{movie.director}</p>
      <p>{movie.category}</p>
      <button type="button" onClick={handleClick}>
        자세히
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : " "}
    </>
  );
};

export default Movie;

import React from "react";
import { getMovies } from "../movie_data";
import { Link, Outlet } from "react-router-dom";

const Movies = () => {
  const movies = getMovies();
  return (
    <>
      <h1>영화</h1>
      <div>
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ display: "block" }}
          >
            {movie.title}
          </Link>
        ))}
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default Movies;

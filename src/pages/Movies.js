import React from "react";
import { getMovies } from "../movie_data";
import { Link, Outlet, NavLink } from "react-router-dom";

const Movies = () => {
  const movies = getMovies();
  return (
    <>
      <h1>영화</h1>
      <div>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={{ display: "block" }}
          >
            <p>{movie.title}</p>
          </NavLink>
        ))}
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default Movies;

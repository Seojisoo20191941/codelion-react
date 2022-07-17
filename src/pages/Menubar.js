import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Menubar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Menubar;

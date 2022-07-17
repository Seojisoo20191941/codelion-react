import React from "react";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
const Menubar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/"); //이 경로로 돌아가라
  };
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
      <button type="button" onClick={goHome}>
        홈으로 돌아가기
      </button>
    </>
  );
};

export default Menubar;

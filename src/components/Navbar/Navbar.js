import React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function Navigation() {
  const { currentUser } = useAuth();
  return (
    <ul className="navigation">
      <NavLink
        exact
        className="navigation__item"
        to={`${process.env.PUBLIC_URL}`}
      >
        Task List
      </NavLink>
      {currentUser ? (
        <>
          <NavLink
            className="navigation__item"
            to={`${process.env.PUBLIC_URL}/profile`}
          >
            Profile
          </NavLink>
          <NavLink
            className="navigation__item"
            to={`${process.env.PUBLIC_URL}/logout`}
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className="navigation__item"
            to={`${process.env.PUBLIC_URL}/signup`}
          >
            SignUp
          </NavLink>
          <NavLink
            className="navigation__item"
            to={`${process.env.PUBLIC_URL}/login`}
          >
            LogIn
          </NavLink>
        </>
      )}
    </ul>
  );
}

export default Navigation;

import React from "react";

import "./Navigation.css";
import { NavLink } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

function Navigation() {
  const { currentUser } = useAuth();

  return (
    <ul className="navigation">
      {currentUser ? (
        <>
          <NavLink
            exact
            className="navigation__item"
            to={`${process.env.PUBLIC_URL}`}
          >
            Task List
          </NavLink>
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
            Sign Up
          </NavLink>
          <NavLink
            className="navigation__item"
            to={`${process.env.PUBLIC_URL}/login`}
          >
            Log In
          </NavLink>
        </>
      )}
    </ul>
  );
}

export default Navigation;

import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import icons from "../assets/icons";

const SideBarNavigation = () => (
  <div className="sidenav">
    <icons.logo className="sidenav__logo" />
    <nav className="sidenav__items">
      <NavLink to="/">
        <icons.iconNavHome />
      </NavLink>
      <NavLink to="/movies-catalog">
        <icons.iconNavMovies />
      </NavLink>
      <NavLink to="/TV-catalog">
        <icons.iconNavTVSeries />
      </NavLink>
      <NavLink to="/saved-catalog">
        <icons.iconNavBookmark />
      </NavLink>
    </nav>

    <img src={icons.avatar} alt="avatar" className="sidenav__avatar" />
  </div>
);

export default SideBarNavigation;

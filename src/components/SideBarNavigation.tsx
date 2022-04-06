import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../assets/icons";
import { useSelector } from "react-redux";
import { userSelector } from "../store/user/userSlice";
const SideBarNavigation = () => {
  const { user } = useSelector(userSelector);

  return (
    <header className="sidenav">
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
        <NavLink to="/bookmarked">
          <icons.iconNavBookmark />
        </NavLink>
      </nav>

      <img
        src={user.profile?.photoURL || icons.avatar}
        alt="avatar"
        className="sidenav__avatar"
      />
    </header>
  );
};

export default SideBarNavigation;

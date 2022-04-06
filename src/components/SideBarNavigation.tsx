import React from "react";
import { NavLink } from "react-router-dom";
import icons from "../assets/icons";
import { useSelector } from "react-redux";
import { userSelector } from "../store/user/userSlice";
import { signOut, auth } from "../common/fbConfig";
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
      <button className="sidenav__avatar" onClick={(e) => signOut(auth)}>
        <img
          src={user.profile?.photoURL || icons.avatar}
          alt="avatar"
          className="sidenav__avatar-img"
        />
      </button>
    </header>
  );
};

export default SideBarNavigation;

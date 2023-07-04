import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import Header from "./Header";
import DashboardHome from "./DashboardHome";
import DashboardSongs from "./DashboardSongs";
import DashboardArtist from "./DashboardArtist";
import DashboardUser from "./DashboardUser";
import DashboardAlbums from "./DashboardAlbums";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

export default function Dashboard() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <div className="w-[60%] my-2 p-4 flex items-center justify-evenly">
        <NavLink to={"home"}>
          <IoHome />
        </NavLink>
        <NavLink to={"user"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Users</NavLink>
        <NavLink to={"songs"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Songs</NavLink>
        <NavLink to={"artists"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Artist</NavLink>
        <NavLink to={"albums"} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Albums</NavLink>
      </div>
      <div className="my-4 w-full p-4">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/user" element={<DashboardUser />} />
          <Route path="/songs" element={<DashboardSongs />} />
          <Route path="/artists" element={<DashboardArtist />} />
          <Route path="/albums" element={<DashboardAlbums />} />
        </Routes>
      </div>
    </div>
  );
}

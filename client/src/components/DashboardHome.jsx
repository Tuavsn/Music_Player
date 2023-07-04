import React, { useEffect } from "react";
import { bgColors } from "../utils/styles";
import { FaUser } from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { IoIosAlbums } from "react-icons/io"
import { useStateValue } from "../context/stateProvider";
import { getAllAlbums, getAllArtists, getAllSongs, getAllUsers } from "../api";
import { actionType } from "../context/reducer";
import { NavLink } from "react-router-dom";

export const DashboardCard = ({ icon, name, count }) => {
  const BgColors = bgColors[parseInt(Math.random() * bgColors.length)];
  return (
    <div
      style={{ backgroundColor: `${BgColors}` }}
      className="p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col items-center justify-center"
    >
      {icon}
      <p className="text-xl text-textColor font-semibold">{name}</p>
      <p className="text-sm text-textColor">{count}</p>
    </div>
  );
};

export default function DashboardHome() {
  const [{ allUsers, allSongs, allArtists, allAlbums }, dispatch] = useStateValue();
  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USER,
          allUsers: data.data,
        });
      });
    }
    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        });
      });
    }
    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.data,
        });
      });
    }
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.data,
        })
      })
    }
  }, []);
  return (
    <div className="w-full p-6 flex items-center justify-evenly flex-wrap">
      <NavLink to={"../user"}>
        <DashboardCard icon={<FaUser />} name={"Users"} count={allUsers?.length > 0 ? allUsers.length : 0} />
      </NavLink>
      <NavLink to={"../songs"}>
        <DashboardCard icon={<GiLoveSong />} name={"Songs"} count={allSongs?.length > 0 ? allSongs.length : 0}/>
      </NavLink>
      <NavLink to={"../artists"}>
        <DashboardCard icon={<RiUserStarFill />} name={"Artist"} count={allArtists?.length > 0 ? allArtists.length : 0}/>
      </NavLink>
      <NavLink to={"../albums"}>
        <DashboardCard icon={<IoIosAlbums />} name={"Albums"} count={allAlbums?.length > 0 ? allAlbums.length : 0}/>
      </NavLink>
    </div>
  );
}

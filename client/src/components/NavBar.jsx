import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidHot, BiSolidPlaylist, BiLogOutCircle } from "react-icons/bi";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { AiOutlineMenu, AiTwotoneHome, AiFillWechat } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { app } from "../config/firebase.config";
import { getAuth } from "firebase/auth";

const NavBar = () => {
  const navigate = useNavigate();
  function signOut() {
    const firebaseAuth = getAuth(app);
    firebaseAuth
      .signOut()
      .then(() => {
        window.localStorage.setItem("auth", "false");
      })
      .catch((e) => console.log(e));
    navigate("/login", { replace: true });
  }
  return (
    <div className="h-full mt-2 flex flex-col gap-10">
      <NavLink
        className="group flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
        to={"/home"}
      >
        <AiTwotoneHome className="text-xl font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out" />
        <h2 className="font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
          HOME
        </h2>
      </NavLink>
      <NavLink
        className="group ml-2 flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
        to={"/chat"}
      >
        <div className="p-1 bg-lightOverlay rounded-md group-hover:bg-[#6B5ECE] group-hover:scale-110 transition-all duration-150 ease-in-out">
          <AiFillWechat className="text-xl font-bold text-white transition-all duration-150 ease-in-out" />
        </div>
        <p className="text-base font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
          Chat
        </p>
      </NavLink>
      <NavLink
        className="group ml-2 flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
        to={"/contact"}
      >
        <div className="p-1 bg-lightOverlay rounded-md group-hover:bg-[#6B5ECE] group-hover:scale-110 transition-all duration-150 ease-in-out">
          <RiAdminLine className="text-xl font-bold text-white transition-all duration-150 ease-in-out" />
        </div>
        <p className="text-base font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
          Liên hệ Admin
        </p>
      </NavLink>
      <NavLink
        className="group flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
        to={"/menu"}
      >
        <AiOutlineMenu className="text-xl font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out" />
        <h2 className="font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
          MENU
        </h2>
      </NavLink>
      <ul className="flex flex-col gap-10">
        <NavLink
          className="group ml-2 flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
          to={"/explore"}
        >
          <div className="p-1 bg-lightOverlay rounded-md group-hover:bg-[#6B5ECE] group-hover:scale-110 transition-all duration-150 ease-in-out">
            <BiSolidHot className="text-xl font-bold text-white transition-all duration-150 ease-in-out" />
          </div>
          <li className="text-base font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
            Khám phá
          </li>
        </NavLink>
        <NavLink
          className="group ml-2 flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
          to={"/top100vietnam"}
        >
          <div className="p-1 bg-lightOverlay rounded-md group-hover:bg-[#6B5ECE] group-hover:scale-110 transition-all duration-150 ease-in-out">
            <BsFillMusicPlayerFill className="text-xl font-bold text-white transition-all duration-150 ease-in-out" />
          </div>
          <li className="text-base font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
            Top 100 nhạc Việt
          </li>
        </NavLink>
        <NavLink
          className="group ml-2 flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
          to={"/top100usuk"}
        >
          <div className="p-1 bg-lightOverlay rounded-md group-hover:bg-[#6B5ECE] group-hover:scale-110 transition-all duration-150 ease-in-out">
            <BsFillMusicPlayerFill className="text-xl font-bold text-white transition-all duration-150 ease-in-out" />
          </div>
          <li className="text-base font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
            Top 100 nhạc Âu Mỹ
          </li>
        </NavLink>
        <NavLink
          className="group ml-2 flex gap-4 items-center hover:scale-110 transition-all duration-150 ease-in-out"
          to={"/topic"}
        >
          <div className="p-1 bg-lightOverlay rounded-md group-hover:bg-[#6B5ECE] group-hover:scale-110 transition-all duration-150 ease-in-out">
            <BiSolidPlaylist className="text-xl font-bold text-white transition-all duration-150 ease-in-out" />
          </div>
          <li className="text-base font-bold text-white group-hover:scale-110 transition-all duration-150 ease-in-out">
            Chủ đề
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;

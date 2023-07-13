import React from "react";
import { Logo } from "../assets/img/index";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center h-full w-275 bg-darkOverlay">
      <NavLink to={"/home"}>
        <img src={Logo} alt="Logo" className="w-36 py-6" />
      </NavLink>
      <NavBar />
    </div>
  );
};

export default SideBar;

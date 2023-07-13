import React from "react";
import { Home, SideBar } from "../components/BetaComponents";
import Background from "../assets/img/background.jpg";

export const HomePage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-screen h-screen flex bg-cover"
    >
      <SideBar />
      <Home />
    </div>
  );
};

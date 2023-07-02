import React from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/img";
import { FcBusinessman } from "react-icons/fc"

export default function Header() {
    return (
        <header className="flex items-center w-full p-4 md:py-2 md:px-6 bg-neutral-200">
            <NavLink to={"/"}>
                 <img src={Logo} alt="Logo" className="w-16 hover:scale-110 duration-200 ease-in-out transition-all"/>
            </NavLink>
            <ul className="flex items-center justify-center ml-7">
                <li className="mx-5 text-xl font-medium hover:scale-110 duration-200 ease-linear transition-all"><NavLink to={"/home"}>Home</NavLink></li>
                <li className="mx-5 text-xl font-medium hover:scale-110 duration-200 ease-linear transition-all"><NavLink to={"/music"}>Musics</NavLink></li>
                <li className="mx-5 text-xl font-medium hover:scale-110 duration-200 ease-linear transition-all"><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            <div className="">
                <img src=""/*{user?user?.imageURL}*/ alt="" referrerPolicy="no-referrer" />
                <div>
                    <p></p>
                    <FcBusinessman />
                </div>
            </div>
        </header>
    )
}
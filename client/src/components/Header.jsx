import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../assets/img";
import { FaCrown } from "react-icons/fa";
import { useStateValue } from "../context/stateProvider";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { motion } from "framer-motion";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
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
    <header className="flex items-center w-full p-4 md:py-2 md:px-6 bg-neutral-200">
      <NavLink to={"/"}>
        <img
          src={Logo}
          alt="Logo"
          className="w-16 hover:scale-110 duration-200 ease-in-out transition-all"
        />
      </NavLink>
      <ul className="flex items-center justify-center ml-7">
        <li className="mx-5 text-xl font-medium hover:scale-110 duration-200 ease-linear transition-all">
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mx-5 text-xl font-medium hover:scale-110 duration-200 ease-linear transition-all">
          <NavLink
            to={"/music"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Musics
          </NavLink>
        </li>
        <li className="mx-5 text-xl font-medium hover:scale-110 duration-200 ease-linear transition-all">
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? isActiveStyles : isNotActiveStyles
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        className="flex items-center ml-auto cursor-pointer gap-2 relative"
        onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)}
      >
        <img
          className="w-12 min-w-[44px] object-cover rounded-full shadow-lg"
          src={user?.user?.imageURL}
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col items-center">
          <FaCrown className="text-xm text-yellow-500" />
          <p className="text-textColor text-lg font-semibold hover:text-headingColor">
            {user?.user.name}
          </p>
        </div>
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 top-12 right-0 w-225 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col"
          >
            <NavLink to={"/userProfile"}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>
            <NavLink to={""}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                My favourites
              </p>
            </NavLink>
            <hr />
            {user?.user.role == "admin" && (
              <>
                <NavLink to={"/dashboard/home"}>
                  <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                    Dashboard
                  </p>
                </NavLink>
              </>
            )}
            <p
              className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
              onClick={signOut}
            >
              Sign out
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
}

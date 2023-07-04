import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { LoginBg } from "../assets/video";
import { app } from "../config/firebase.config";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useStateValue } from "../context/stateProvider";
import { validateUser } from "../api";
import { actionType } from "../context/reducer"

export default function Login({ setAuth }) {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCredential) => {
      if(userCredential) {
        setAuth(true)
        window.localStorage.setItem("auth", "true")
        onAuthStateChanged(firebaseAuth, (userCredential) => {
          if(userCredential) {
            userCredential.getIdToken().then((token) => {
              window.localStorage.setItem("auth", "true");
              validateUser(token).then((data) => {
                dispatch({
                  type: actionType.SET_USER,
                  user: data
                })
              })
            })
            navigate("/", { replace: true });
          } else {
            setAuth(false)
            dispatch({
              type: actionType.SET_USER,
              user: null,
            })
            navigate("/login");
          }
        })
      }
    });
  };
  useEffect(() => {
    if(window.localStorage.getItem("auth") == "true")
      navigate("/", { replace: true })
  }, [])
  return (
    <div className="relative w-screen h-screen">
      <video
        src={LoginBg}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div
            onClick={loginWithGoogle}
            className="flex w-full items-center justify-center gap-2 p-4 mb-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover: shadow-md duration-100 ease-in-out transition-all"
          >
            <FcGoogle className="text-xl" />
            <p className="font-medium">Signin with Google</p>
          </div>
          <div className="flex w-full items-center justify-center gap-2 p-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover: shadow-md duration-100 ease-in-out transition-all">
            <AiFillFacebook className="text-xl" />
            <p className="font-medium">Signin with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

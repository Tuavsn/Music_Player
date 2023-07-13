import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AnimatePresence, motion } from "framer-motion";
import { useStateValue } from "./context/stateProvider";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { validateUser } from "./api";
import { actionType } from "./context/reducer";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const [{ user, isSongPlaying }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        setIsLoading(true);
        userCredential.getIdToken().then((token) => {
          window.localStorage.setItem("auth", "true");
          validateUser(token).then((data) => {
            dispatch({
              type: actionType.SET_USER,
              user: data,
            });
          });
        });
        setIsLoading(false);
      } else {
        setAuth(false);
        dispatch({
          type: actionType.SET_USER,
          data: null,
        });
        setIsLoading(false);
        window.localStorage.setItem("auth", "false");
        navigate("/login", { replace: true });
      }
    });
  }, []);
  return (
    <AnimatePresence>
      <div>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          {/* <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/music" element={<MusicList />} /> */}
        </Routes>
        {isSongPlaying && <MusicPlayer />}
      </div>
    </AnimatePresence>
  );
}

import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home, Login, Dashboard } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/stateProvider";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { validateUser } from "./api";
import { actionType } from "./context/reducer";

export default function App() {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
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
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

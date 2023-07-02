import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Login } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/stateProvider";

export default function App() {
  const [{ user }, dispatch] = useStateValue();
  const [auth, setAuth] = useState(false);
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </AnimatePresence>
  );
}

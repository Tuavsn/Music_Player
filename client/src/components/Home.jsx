import React from "react";
import Header from "./Header";
import Content from "./Content";

const Home = () => {
  return (
    <div className="h-full w-full flex-1 flex flex-col bg-darkOverlay">
      <Header />
      <Content />
    </div>
  );
};

export default Home;

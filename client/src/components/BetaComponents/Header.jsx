import React from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

const Header = () => {
  return (
    <div className="w-full flex justify-end items-center gap-10 my-4">
        <SearchBar />
        <UserCard />
    </div>
  );
};

export default Header;

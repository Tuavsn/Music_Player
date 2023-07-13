import React, { useState } from "react";

const SearchBar = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [filter, setFilter] = useState([]);
  return (
    <div>
      <div className="w-full flex items-center gap-4">
        <input
          type="text"
          placeholder="Search here"
          className={`w-[500px] px-4 py-2 border ${
            isFocus ? "border-gray-500 shadow-md" : "border-gray-300"
          } rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
        />
      </div>
    </div>
  );
};

export default SearchBar

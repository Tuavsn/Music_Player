import React from "react";
import { useStateValue } from "../context/stateProvider";
import { FaCrown } from "react-icons/fa";


const UserCard = () => {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="flex items-center px-10 cursor-pointer gap-4 relative rounded-md">
      <img
        className="w-14 min-w-[44px] object-cover rounded-md"
        src={user?.user?.imageURL}
        alt=""
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col items-center">
        <FaCrown className="text-xm text-yellow-500" />
        <p className="text-white text-lg font-semibold">
          {user?.user.name}
        </p>
        <p className="text-gray-300 text-sm">{user?.user.role}</p>
      </div>
    </div>
  );
};

export default UserCard;

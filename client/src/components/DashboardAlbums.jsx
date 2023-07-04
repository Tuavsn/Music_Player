import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useStateValue } from "../context/stateProvider";
import { getAllAlbums } from "../api";
import { actionType } from "../context/reducer";
import { MdDelete } from "react-icons/md";

export const AlbumCard = ({ data, index }) => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative overflow-hidden w-44 min-w-210 px-2 py-4 gap-3 cursor-pointer bg-gray-100 shadow-md rounded-lg flex flex-col items-center hover:shadow-xl hover:bg-card"
    >
      <img
        src={data?.imageURL}
        alt=""
        className="w-full h-40 object-cover rounded-md"
      />
      <p className="text-base text-textColor">{data.name}</p>
      <motion.i
        className="text-gray-400 text-xl cursor-pointer hover:text-red-400"
        whileTap={{ scale: 0.75 }}
        onClick={() => setIsDelete(true)}
      >
        <MdDelete />
      </motion.i>

      {isDelete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 p-2 bg-darkOverlay  backdrop-blur-md flex flex-col items-center justify-center gap-4"
        >
          <p className="text-gray-100 text-base text-center">
            Are you sure do you want to delete this?
          </p>
          <div className="flex items-center w-full justify-center gap-3">
            <div className="bg-red-300 px-3 rounded-md">
              <p className="text-headingColor text-sm">Yes</p>
            </div>
            <div
              className="bg-green-300 px-3 rounded-md"
              onClick={() => setIsDelete(false)}
            >
              <p className="text-headingColor text-sm">No</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function DashboardAlbums() {
  const [{ allAlbums }, dispatch] = useStateValue();
  useEffect(() => {
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.data,
        });
      });
    }
  }, []);
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="relative w-full gap-3 my-4 p-4 py-12 border border-gray-300 rounded-md flex flex-wrap justify-evenly">
        {allAlbums &&
          allAlbums.map((data, index) => (
            <>
              <AlbumCard key={index} data={data} index={index} />
            </>
          ))}
      </div>
    </div>
  );
}

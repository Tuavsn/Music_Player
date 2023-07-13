import React from "react";
import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
import { motion } from "framer-motion";
const MusicRow = ({ data, index }) => {
    const [{ song, isSongPlaying }, dispatch] = useStateValue()
    const addSongToContext = () => {
      if (song !== index) {
        dispatch({
          type: actionType.SET_SONG,
          song: index,
        });
      }
      if (!isSongPlaying) {
        dispatch({
          type: actionType.SET_SONG_PLAYING,
          isSongPlaying: true,
        });
      }
    };
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-lightOverlay cursor-pointer hover:bg-card hover:shadow-md"
        onClick={addSongToContext}
      >
        <tr key={index}>
          <td>{index+1}</td>
          <td>{<img src={data?.thumbnail} alt="" className="w-14 h-14 object-cover rounded-md min-w-[40px] shadow-md" />}</td>
          <td>{data.name}</td>
          <td>{data.artists_names}</td>
        </tr>
      </motion.div>
    );
  };

  export default MusicRow

  // <p className=" text-base text-white w-275 min-w-[160px] text-center">
  //   {index + 1}
  // </p>
  // <div className="flex-grow-[2] w-275 min-w-[160px] flex items-center justify-center">
  //   {/* prettier-ignore */}
  //   <img src={data?.thumbnail} alt="" className="w-14 h-14 object-cover rounded-md min-w-[40px] shadow-md" />
  // </div>
  // {/* prettier-ignore */}
  // <p className="flex-grow-[2] text-base text-white w-275 min-w-[160px] text-center">{data.name}</p>
  // {/* prettier-ignore */}
  // <p className="flex-grow-[2] text-base text-white w-275 min-w-[160px] text-center">{data.artists_names}</p>
import React, { useEffect } from "react";
import { useStateValue } from "../context/stateProvider";
import { Top100Songs } from "../api";
import { actionType } from "../context/reducer";
import { motion } from "framer-motion";
import MusicRow from "./MusicRow";

export const MusicListContainer = ({ data }) => {
  const [{ song, isSongPlaying }, dispatch] = useStateValue();
  const addSongToContext = (index) => {
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
    <div className="w-full h-full overflow-y-scroll">
      <table className="w-full h-full table-auto border-separate border-spacing-y-4">
        <thead>
          <tr className="text-center">
            <th className="text-white p-4">#</th>
            <th className="text-white p-4">Ảnh</th>
            <th className="text-white p-4">Tên</th>
            <th className="text-white p-4">Nghệ sĩ</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((song, index) => (
              <tr
                key={song.id}
                className="text-center cursor-pointer hover:bg-lightOverlay hover:shadow-md"
                onClick={() => addSongToContext(index)}
              >
                <td className="text-white">{index + 1}</td>
                <td className="text-white">
                  {
                    <img
                      src={song?.thumbnail}
                      alt=""
                      className="w-14 h-14 object-cover rounded-md min-w-[40px] shadow-md mx-auto"
                    />
                  }
                </td>
                <td className="text-white">{song.name}</td>
                <td className="text-white">{song.artists_names}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const Top100NhacViet = () => {
  const [{ allSongs, isSongPlaying }, dispatch] = useStateValue();
  useEffect(() => {
    if (!allSongs) {
      Top100Songs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data.song,
        });
      });
    }
  }, []);
  return (
    <div className="h-full p-6">
      <h1 className="text-2xl text-white font-mono font-semibold mb-4">
        Top 100 nhạc Việt:
      </h1>
      <MusicListContainer data={allSongs} />
    </div>
  );
};

export default Top100NhacViet;

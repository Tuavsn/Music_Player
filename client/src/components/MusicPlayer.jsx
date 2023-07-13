import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/stateProvider";
import { actionType } from "../context/reducer";
import { getAllSongs, getSongById } from "../api";
import { motion } from "framer-motion";
import { IoArrowRedo, IoArrowUndo, IoMusicalNote } from "react-icons/io5";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { IoMdClose } from "react-icons/io";

export default function MusicPlayer() {
  const [{ allSongs, song, songURL, isSongPlaying, miniPlayer }, dispatch] =
    useStateValue();
  function closeMusicPlayer() {
    if (isSongPlaying) {
      dispatch({
        type: actionType.SET_SONG_PLAYING,
        isSongPlaying: false,
      });
    }
  }

  function togglePlayer() {
    if (miniPlayer) {
      dispatch({
        type: actionType.SET_MINI_PALYER,
        miniPlayer: false,
      });
    } else {
      dispatch({
        type: actionType.SET_MINI_PALYER,
        miniPlayer: true,
      });
    }
  }

  function nextTrack() {
    if (song == allSongs.length - 1) {
      dispatch({
        type: actionType.SET_SONG,
        song: 0,
      });
    } else {
      dispatch({
        type: actionType.SET_SONG,
        song: song + 1,
      });
    }
  }

  function previousTrack() {
    if (song === 0) {
      dispatch({
        type: actionType.SET_SONG,
        song: allSongs.length - 1,
      });
    } else {
      dispatch({
        type: actionType.SET_SONG,
        song: song - 1,
      });
    }
  }
  useEffect(() => {
    if (song > allSongs.length) {
      dispatch({
        type: actionType.SET_SONG,
        song: 0,
      });
    }
    getSongById(allSongs[song]?.id).then((data) => {
      dispatch({
        type: actionType.SET_SONG_URL,
        songURL: data.data["128"],
      });
    });
  }, [song]);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed min-w-[700px] h-auto  inset-x-0 bottom-0 backdrop-blur-[1.5px] drop-shadow-2xl flex items-center justify-center
        ${miniPlayer ? "hidden" : "block"}`}
      >
        <div className="w-full full flex items-center gap-3 overflow-hidden">
          <div className="w-full full items-center gap-3 px-3 py-1 flex relative">
            <img
              src={allSongs[song]?.thumbnail}
              alt=""
              className="w-40 h-32 object-cover rounded-md"
            />
            <div className="w-44 h-20 flex items-start justify-around flex-col">
              <p className="text-white flex-[2]">
                {allSongs[song]?.artists_names.length > 20
                  ? `${allSongs[song]?.artists_names.slice(0, 20)}...`
                  : allSongs[song]?.artists_names}
              </p>
              <div className="flex-[1] w-full flex items-center justify-end gap-4">
                <motion.i whileTap={{ scale: 0.8 }} onClick={closeMusicPlayer}>
                  <IoMdClose className="text-white text-2xl font-bold cursor-pointer hover:text-headingColor hover:scale-125 transition-all duration-150" />
                </motion.i>
                <motion.i whileTap={{ scale: 0.8 }} onClick={togglePlayer}>
                  <IoArrowRedo className="text-white text-2xl font-bold cursor-pointer hover:text-headingColor hover:scale-125 transition-all duration-150" />
                </motion.i>
              </div>
            </div>
            <div className="flex-1">
              <AudioPlayer
                src={songURL}
                autoPlay={true}
                showSkipControls={true}
                onClickNext={nextTrack}
                onClickPrevious={previousTrack}
              />
            </div>
          </div>
        </div>
      </motion.div>
      {miniPlayer && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed right-2 bottom-2"
        >
          <div className="w-40 h-40 rounded-full flex items-center justify-center cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-red-600 blur-xl animate-pulse"></div>
            <img
              src={allSongs[song]?.thumbnail}
              alt=""
              onClick={togglePlayer}
              className="z-50 w-32 h-32 rounded-fill object-cover cursor-pointer"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

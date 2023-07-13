export const actionType = {
  SET_USER: "SET_USER",
  SET_ALL_USER: "SET_ALL_USER",
  SET_ALL_ARTISTS: "SET_ALL_ARTISTS",
  SET_ALL_SONGS: "SET_SONGS",
  SET_ALL_ALBUMS: "SET_ALL_ALBUMS",
  SET_SONG: "SET_SONG",
  SET_SONG_PLAYING: "SET_SONG_PLAYING",
  SET_MINI_PALYER: "SET_MINI_PLAYER",
  SET_SONG_URL: "SET_SONG_URL",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_ALL_USER:
      return {
        ...state,
        allUsers: action.allUsers,
      };
    case actionType.SET_ALL_ARTISTS:
      return {
        ...state,
        allArtists: action.allArtists,
      };
    case actionType.SET_ALL_SONGS:
      return {
        ...state,
        allSongs: action.allSongs,
      };
    case actionType.SET_ALL_ALBUMS:
      return {
        ...state,
        allAlbums: action.allAlbums,
      };
    case actionType.SET_SONG:
      return {
        ...state,
        song: action.song,
      };
    case actionType.SET_SONG_PLAYING:
      return {
        ...state,
        isSongPlaying: action.isSongPlaying,
      };
    case actionType.SET_MINI_PALYER:
      return {
        ...state,
        miniPlayer: action.miniPlayer,
      };
    case actionType.SET_SONG_URL:
      return {
        ...state,
        songURL: action.songURL,
      };
    default:
      return state;
  }
};

export const actionType = {
  SET_USER: "SET_USER",
  SET_ALL_USER: "SET_ALL_USER",
  SET_ARTISTS: "SET_ARTISTS",
  SET_ALL_SONGS: "SET_SONGS",
};

export const reducer = (state, action) => {
  console.log(action);
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
    case actionType.SET_ARTISTS:
      return {
        ...state,
        artists: action.artists,
      };
    case actionType.SET_ALL_SONGS:
      return {
        ...state,
        allSongs: action.allSongs,
      };
    default:
      return state;
  }
};

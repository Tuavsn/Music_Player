import axios from "axios";

const baseURL = "http://localhost:5000";

export const validateUser = async (token) => {
  try {
    const result = await axios.get(`${baseURL}/api/users/login`, {
      headers: {
        Authorization: "UserImpl " + token,
      },
    });
    return result.data;
  } catch (error) {
    return null;
  }
};

export const getAllUsers = async () => {
  try {
    const result = await axios(`${baseURL}/api/users/getAll`);
    return result.data;
  } catch (error) {
    return null;
  }
};

export const removeUser = async (userId) => {
  try {
    const result = await axios(`${baseURL}/api/users/delete/${userId}`);
    return result;
  } catch (error) {
    return null;
  }
};

export const getAllSongs = async () => {
  try {
    const result = await axios(`${baseURL}/api/song/getAll`);
    return result.data;
  } catch (error) {
    return null;
  }
};

export const getAllArtists = async () => {
  try {
    const result = await axios(`${baseURL}/api/artist/getAll`);
    return result.data;
  } catch (error) {
    return null;
  }
};

export const getAllAlbums = async () => {
  try {
    const result = await axios(`${baseURL}/api/album/getAll`);
    return result.data;
  } catch (error) {
    return null;
  }
};

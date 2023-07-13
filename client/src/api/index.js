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

export const searchUser = async (key) => {
  try {
    const result = await axios(`${baseURL}/api/users/search/${key}`);
    return result.data;
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

export const removeSong = async (songId) => {
  try {
    const result = await axios(`${baseURL}/api/song/delete/${songId}`);
    return result;
  } catch (error) {
    return null;
  }
};

export const searchSong = async (key) => {
  try {
    const result = await axios(`${baseURL}/api/song/search/${key}`);
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

export const removeArtist = async (artistId) => {
  try {
    const result = await axios(`${baseURL}/api/artist/delete/${artistId}`);
    return result;
  } catch (error) {
    return null;
  }
};

export const searchArtist = async (key) => {
  try {
    const result = await axios(`${baseURL}/api/artist/search/${key}`);
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

export const removeAlbum = async (albumId) => {
  try {
    const result = await axios(`${baseURL}/api/album/delete/${albumId}`);
    return result;
  } catch (error) {
    return null;
  }
};

export const searchAlbum = async (key) => {
  try {
    const result = await axios(`${baseURL}/api/album/search/${key}`);
    return result.data;
  } catch (error) {
    return null;
  }
};

// Zing Api
export const Top100Songs = async () => {
  try {
    const result = await axios("https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1");
    return result.data;
  } catch (error) {
    return null;
  }
}

export const getSongById = async (songId) => {
  try {
    const result = await axios(`${baseURL}/api/zing/song?id=${songId}`);
    return result.data;
  } catch (error) {
    return null;
  }
}
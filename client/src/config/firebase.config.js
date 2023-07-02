import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCevkXp3zVRbK2AtFm3wvhPKIHxkgCM5dI",
    authDomain: "my-music-player-3bb8e.firebaseapp.com",
    projectId: "my-music-player-3bb8e",
    storageBucket: "my-music-player-3bb8e.appspot.com",
    messagingSenderId: "41390952989",
    appId: "1:41390952989:web:7580f431bb4faf30a36cf4"
};
  

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx09mygUO6Nl4xkFL7FjMjaxIve9SRZVk",
  authDomain: "abhyas-4663e.firebaseapp.com",
  projectId: "abhyas-4663e",
  storageBucket: "abhyas-4663e.appspot.com",
  messagingSenderId: "231108513980",
  appId: "1:231108513980:web:c1ab62443e8efe9febc0b9",
  measurementId: "G-05FEBK2FHC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);

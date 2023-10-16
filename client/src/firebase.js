// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-565aa.firebaseapp.com",
  projectId: "mern-estate-565aa",
  storageBucket: "mern-estate-565aa.appspot.com",
  messagingSenderId: "705047805578",
  appId: "1:705047805578:web:80f2421ea174be05e07773"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
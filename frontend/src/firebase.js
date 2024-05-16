// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-40b8d.firebaseapp.com",
  projectId: "mern-blog-40b8d",
  storageBucket: "mern-blog-40b8d.appspot.com",
  messagingSenderId: "532107420388",
  appId: "1:532107420388:web:8dc7662ca621eafa9402f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIVZ_7mzRWDO57r0ovNJIcLAI8Pj_fFfo",
  authDomain: "blendrollapp.firebaseapp.com",
  projectId: "blendrollapp",
  storageBucket: "blendrollapp.appspot.com",
  messagingSenderId: "835105987668",
  appId: "1:835105987668:web:b39c0e60722d79f79721c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore (app)
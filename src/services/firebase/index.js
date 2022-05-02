// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDy3j5GkosUZtppGlBlF0uIqjNv1jLw7c",
  authDomain: "newblendrollapp.firebaseapp.com",
  projectId: "newblendrollapp",
  storageBucket: "newblendrollapp.appspot.com",
  messagingSenderId: "1065630751821",
  appId: "1:1065630751821:web:2a686bb38eb0e2112ad004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore (app)
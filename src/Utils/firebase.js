// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDCxCdVSKqSiZAfT4UKdL_0PlOzStf-nU",
  authDomain: "netflixgpt-b3932.firebaseapp.com",
  projectId: "netflixgpt-b3932",
  storageBucket: "netflixgpt-b3932.firebasestorage.app",
  messagingSenderId: "888264846828",
  appId: "1:888264846828:web:5c315e60edf67e8e5864c9",
  measurementId: "G-X4QP0RQF2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
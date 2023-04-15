import firebase from 'firebase/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASlxDpuA4avzq4wfuR7djup1Q1VsckkaQ",
  authDomain: "colibri-web-be84c.firebaseapp.com",
  projectId: "colibri-web-be84c",
  storageBucket: "colibri-web-be84c.appspot.com",
  messagingSenderId: "201775537048",
  appId: "1:201775537048:web:966d69afd5f3ac690329ed",
  measurementId: "G-EC4ZGZ320P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
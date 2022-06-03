// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_FfNy0Gqeq4m4_4HI94aVL8Huw_7Ri40",
  authDomain: "react-cars-216.firebaseapp.com",
  projectId: "react-cars-216",
  storageBucket: "react-cars-216.appspot.com",
  messagingSenderId: "841782351730",
  appId: "1:841782351730:web:674162156ed1343660efeb",
  measurementId: "G-GFTC655PW2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
// Initialize Firebase/*
/*const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}*/
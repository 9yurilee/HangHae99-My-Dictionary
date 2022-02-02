// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhptX7dK-PYu7JAuBStTQ7Txu7UHbgRwk",
  authDomain: "my-dictionary-6c4fa.firebaseapp.com",
  projectId: "my-dictionary-6c4fa",
  storageBucket: "my-dictionary-6c4fa.appspot.com",
  messagingSenderId: "309124436483",
  appId: "1:309124436483:web:d8b39623551e2356c6b436",
  measurementId: "G-ZD32FJ051E"
};

//파이어베이스를 쓸  수 있도록 기초설정 해는 것
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
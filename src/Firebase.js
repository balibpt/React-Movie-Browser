// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs6b6DNKK7IiMpWX5qXiar2bDQS7FZpeA",
  authDomain: "filmfinder-e2c98.firebaseapp.com",
  projectId: "filmfinder-e2c98",
  storageBucket: "filmfinder-e2c98.appspot.com",
  messagingSenderId: "199073375490",
  appId: "1:199073375490:web:9d0381d9274a9a1b570e1b",
  measurementId: "G-FF37FQY5SC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

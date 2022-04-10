// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEsI9_4PIzqNNow_o0aJN4GDskiSVacQ8",
  authDomain: "ema-john-simple-da0df.firebaseapp.com",
  projectId: "ema-john-simple-da0df",
  storageBucket: "ema-john-simple-da0df.appspot.com",
  messagingSenderId: "796369985166",
  appId: "1:796369985166:web:9130813484409cde8db3df",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
export default auth;

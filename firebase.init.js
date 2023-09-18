// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqd1LcHdg8bdPjK4fJE-RdWY1izmDjmHA",
  authDomain: "artfolio-878b1.firebaseapp.com",
  projectId: "artfolio-878b1",
  storageBucket: "artfolio-878b1.appspot.com",
  messagingSenderId: "675563273606",
  appId: "1:675563273606:web:570704a0fdf28c26520007",
  measurementId: "G-B3VPYX5RJ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;

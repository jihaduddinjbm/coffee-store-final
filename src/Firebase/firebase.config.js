// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRAlk40o8RkGSS_NgztJK8Nf0f8C1lTg",
  authDomain: "coffee-store-fire.firebaseapp.com",
  projectId: "coffee-store-fire",
  storageBucket: "coffee-store-fire.appspot.com",
  messagingSenderId: "144300371853",
  appId: "1:144300371853:web:3b993b65840aa1585597c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgSi7U5PclgPXnSNNklC9tm4p6-mc-nY0",
  authDomain: "ecommerce-react-firebase-auth.firebaseapp.com",
  projectId: "ecommerce-react-firebase-auth",
  storageBucket: "ecommerce-react-firebase-auth.appspot.com",
  messagingSenderId: "631227055987",
  appId: "1:631227055987:web:61ce9d4868abc9b1d8cf06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
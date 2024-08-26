// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdhJ_hNWAF5UnGLKDv5ffFBUloTbQ2yr0",
  authDomain: "blog-web-app-f773a.firebaseapp.com",
  projectId: "blog-web-app-f773a",
  storageBucket: "blog-web-app-f773a.appspot.com",
  messagingSenderId: "792366609056",
  appId: "1:792366609056:web:bea1b484e5e5fe5fa14fc5",
  measurementId: "G-034SBT2JHJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

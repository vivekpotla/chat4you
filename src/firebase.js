// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDaC6HUDFzRBhUL0bKCj3zrG5WNMLE1WLU",
  authDomain: "chat4you-64.firebaseapp.com",
  projectId: "chat4you-64",
  storageBucket: "chat4you-64.appspot.com",
  messagingSenderId: "367347668614",
  appId: "1:367347668614:web:f66fa90ac21c76a96ca307",
  measurementId: "G-WH0YCYC50B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
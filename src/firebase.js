import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
//require('dotenv').config();
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
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage= getStorage()
export const db= getFirestore()
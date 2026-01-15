// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9A-msZdUZ-umBcbIurm8Y2np-uqEwmAw",
  authDomain: "prompt-7fddd.firebaseapp.com",
  projectId: "prompt-7fddd",
  storageBucket: "prompt-7fddd.firebasestorage.app",
  messagingSenderId: "140159766446",
  appId: "1:140159766446:web:db0ef9e24ab3794dd2423f",
  measurementId: "G-DX7HJXEC16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

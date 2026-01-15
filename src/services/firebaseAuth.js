import {auth } from "./firebaseinit.js";
import {  createUserWithEmailAndPassword } from "firebase/auth";



export const signup = (email,password) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
   
    console.log("success",user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
     console.log("Echec",errorCode,errorMessage);
  });
};
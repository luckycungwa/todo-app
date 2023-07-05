// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// IMPORT FUNCTIONS FROM FIREBASE
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvHQIDued6L9oV0cVlE6ft4GlhV-cBnrA",
  authDomain: "user-authentication-75cf6.firebaseapp.com",
  projectId: "user-authentication-75cf6",
  storageBucket: "user-authentication-75cf6.appspot.com",
  messagingSenderId: "224109831311",
  appId: "1:224109831311:web:6d51421a62ca28fc85fcfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// I DID NOT INCLUDE THE GOOGLE ANALYTICS CONTENTS
//INITIALIZE Firebase Authentication methods access.
const auth = getAuth(app);

export {auth}
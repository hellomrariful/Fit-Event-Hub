// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH_VtwEvnynspY1mpYaFberxhpHMifMMQ",
  authDomain: "fit-event-hub.firebaseapp.com",
  projectId: "fit-event-hub",
  storageBucket: "fit-event-hub.appspot.com",
  messagingSenderId: "795467103243",
  appId: "1:795467103243:web:ca1a73a8ae79417a2e5b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

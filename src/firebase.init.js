import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnAgihOH0LIQ5ATgeWIXEE1hpcopM39cs",
  authDomain: "lukas-manufacturer.firebaseapp.com",
  projectId: "lukas-manufacturer",
  storageBucket: "lukas-manufacturer.appspot.com",
  messagingSenderId: "550754597750",
  appId: "1:550754597750:web:eb69fed907bd92b7b39857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
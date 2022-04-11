// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7Ftq1nz2b98O69hgga9B414df2ehOSsY",
    authDomain: "ema-john-medium.firebaseapp.com",
    projectId: "ema-john-medium",
    storageBucket: "ema-john-medium.appspot.com",
    messagingSenderId: "505691436849",
    appId: "1:505691436849:web:aac4892167a6a966146210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
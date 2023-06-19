// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIwFPksviVb4sXg5XFaaPXe99MljYK28E",
  authDomain: "fir-login-contex-api.firebaseapp.com",
  projectId: "fir-login-contex-api",
  storageBucket: "fir-login-contex-api.appspot.com",
  messagingSenderId: "1007662970176",
  appId: "1:1007662970176:web:889f2ee0b3bba4077f36a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
    //Place in env.
  apiKey: "8",
  authDomain: "fir-358d0.firebaseapp.com",
  projectId: "fir-358d0",
  storageBucket: "fir-358d0.appspot.com",
  messagingSenderId: "294312454255",
  appId: "1:294312454255:web:c52a463b7d241107ea859a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
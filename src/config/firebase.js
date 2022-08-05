// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJE255V6dBWj5iK1FERJFp9pu0U5Ln6ik",
    authDomain: "hotel-app-1b005.firebaseapp.com",
    projectId: "hotel-app-1b005",
    storageBucket: "hotel-app-1b005.appspot.com",
    messagingSenderId: "851037436649",
    appId: "1:851037436649:web:378f33b8de5c8bcaf90e78",
    measurementId: "G-H7CN8WNKVZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};
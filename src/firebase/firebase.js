// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn4L6PZXYWGTVdTpu33R8gxJfReuZDpfA",
    authDomain: "shoe-store-b96.firebaseapp.com",
    projectId: "shoe-store-b96",
    storageBucket: "shoe-store-b96.appspot.com",
    messagingSenderId: "889385484485",
    appId: "1:889385484485:web:7e0d5f17d4eabe3a9870ac",
    measurementId: "G-LZH9DCDX1L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const db = getFirestore(app);


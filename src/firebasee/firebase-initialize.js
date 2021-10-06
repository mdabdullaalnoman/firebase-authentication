// Import the functions you need from the SDKs(softer development kids) you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";


// Initialize Firebase
const firebaseInitialize = () => {
    initializeApp(firebaseConfig)
}

export {firebaseInitialize};
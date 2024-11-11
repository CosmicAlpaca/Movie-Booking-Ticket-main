import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB0V8A1ZFmFWAYAxUM46CsQBCFJiSsC2_k",
    authDomain: "booking-movietickect-app.firebaseapp.com",
    projectId: "booking-movietickect-app",
    storageBucket: "booking-movietickect-app.firebasestorage.app",
    messagingSenderId: "109791768185",
    appId: "1:109791768185:web:f93b42644519bfcadeeea8"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STO = getStorage(FIREBASE_APP);
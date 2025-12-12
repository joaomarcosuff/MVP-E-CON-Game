import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBnUPL3E8JnbBuqnINL-M6dyZ0MxEddng",
    authDomain: "econoquest-uff.firebaseapp.com",
    projectId: "econoquest-uff",
    storageBucket: "econoquest-uff.firebasestorage.app",
    messagingSenderId: "837238846376",
    appId: "1:837238846376:web:b8366d12da6af14eb5a39d",
    measurementId: "G-10HPXC2MVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
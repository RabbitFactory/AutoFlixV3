// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQ3G-rXINj7IBN-A2l0pn7GFzGUE7BtKQ",
    authDomain: "autoflix3.firebaseapp.com",
    projectId: "autoflix3",
    storageBucket: "autoflix3.firebasestorage.app",
    messagingSenderId: "427279981186",
    appId: "1:427279981186:web:d597566b466fce0dadf29b"
  };

  const app = initializeApp(firebaseConfig);

  // Export the Firebase Auth object
  const auth = getAuth(app);
  export { auth };
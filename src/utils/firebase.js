import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,

  authDomain: "admin-panel-c664e.firebaseapp.com",

  projectId: "admin-panel-c664e",

  storageBucket: "admin-panel-c664e.appspot.com",

  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

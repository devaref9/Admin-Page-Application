import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp6QvL1txCZkPiCDE7UgYh5DVvwlKngvs",

  authDomain: "admin-panel-c664e.firebaseapp.com",

  projectId: "admin-panel-c664e",

  storageBucket: "admin-panel-c664e.appspot.com",

  messagingSenderId: "1:954052223612:web:45a05fa2ad6e3d012e5ff9",

  appId: "954052223612",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

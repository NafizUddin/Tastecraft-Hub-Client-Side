import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBGTIUL71PWaW7_pEg0MGejgtNjeAcFo0",
  authDomain: "tastecraft-hub-assignment-10.firebaseapp.com",
  projectId: "tastecraft-hub-assignment-10",
  storageBucket: "tastecraft-hub-assignment-10.appspot.com",
  messagingSenderId: "67745599972",
  appId: "1:67745599972:web:e27de606dcf7791eb637f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

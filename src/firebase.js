import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwcwl3KPV9BFnMcvxI5TlQWTakavMYs2o",
  authDomain: "fir-8ebc6.firebaseapp.com",
  databaseURL: "https://fir-8ebc6-default-rtdb.firebaseio.com",
  projectId: "fir-8ebc6",
  storageBucket: "fir-8ebc6.firebasestorage.app",
  messagingSenderId: "729926275144",
  appId: "1:729926275144:web:61518437a4d4182189087d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);

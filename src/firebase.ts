// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfsvxrbX-LPztafjZydsFJbNhFjmn5mEI",
  authDomain: "portfolio-shine-db.firebaseapp.com",
  projectId: "portfolio-shine-db",
  storageBucket: "portfolio-shine-db.firebasestorage.app",
  messagingSenderId: "337628485242",
  appId: "1:337628485242:web:bc8513b43eef92b07e8dc3",
  measurementId: "G-7LKMVPQQGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
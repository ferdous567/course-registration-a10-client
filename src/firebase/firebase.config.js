// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1jZwuBIvQHWMmeOl4SMlNZavv0KN8so",
  authDomain: "food-bevarage.firebaseapp.com",
  projectId: "food-bevarage",
  storageBucket: "food-bevarage.appspot.com",
  messagingSenderId: "871480814346",
  appId: "1:871480814346:web:4c798f5c8478e83cc6a8f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
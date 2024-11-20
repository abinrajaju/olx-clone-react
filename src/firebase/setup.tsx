
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPP-YE6KloFLrK1SNOeqcqoHjcykk0Neg",
  authDomain: "olx-clone-71897.firebaseapp.com",
  projectId: "olx-clone-71897",
  storageBucket: "olx-clone-71897.firebasestorage.app",
  messagingSenderId: "554585633758",
  appId: "1:554585633758:web:0ef17a6d4bcb361681a34f",
  measurementId: "G-EV4Q9R948F"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const googleProvider=new GoogleAuthProvider()
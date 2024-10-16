import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAUgNqpYChFD046j_IGC8J7gLtW35TrwLA",
  authDomain: "first-project-c9ca8.firebaseapp.com",
  projectId: "first-project-c9ca8",
  storageBucket: "first-project-c9ca8.appspot.com",
  messagingSenderId: "87240430842",
  appId: "1:87240430842:web:9f8c4aa3b16d39c9a86543",
  measurementId: "G-HTQVT2NELP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
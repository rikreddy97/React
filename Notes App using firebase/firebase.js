import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAC3ygyFi3jkRYNV-BSnTQF8ArkA6jA2Lc",
  authDomain: "react-notes-app-sr1297.firebaseapp.com",
  projectId: "react-notes-app-sr1297",
  storageBucket: "react-notes-app-sr1297.appspot.com",
  messagingSenderId: "1050554219653",
  appId: "1:1050554219653:web:07acc89ea80703f5037dec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db ,"notes")

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDet0gpmHLEUCGfxnS2UwBJrewwe8PMr1Y",
  authDomain: "leektutoriais-d403a.firebaseapp.com",
  projectId: "leektutoriais-d403a",
  storageBucket: "leektutoriais-d403a.appspot.com",
  messagingSenderId: "462743889516",
  appId: "1:462743889516:web:ce56cf97b6cd2f4b439a49",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

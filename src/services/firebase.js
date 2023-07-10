import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDlCrJRTECRxZt7rwBCgqGKCgChujnHIEw',
  authDomain: "recipes-af2a2.firebaseapp.com",
  projectId: "recipes-af2a2",
  storageBucket: "recipes-af2a2.appspot.com",
  messagingSenderId: "283707522530"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export default app;

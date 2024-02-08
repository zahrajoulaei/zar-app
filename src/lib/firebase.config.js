// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwxohEAO8VUMgsC2OBX-JKPkgsRmh4-Ng",
  authDomain: "zar-app-83083.firebaseapp.com",
  projectId: "zar-app-83083",
  storageBucket: "zar-app-83083.appspot.com",
  messagingSenderId: "1291184686",
  appId: "1:1291184686:web:fb394ef282a63c705f0dbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export default app;

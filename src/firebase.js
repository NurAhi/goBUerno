import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXp-hAVJXEDPtU9KZjyhP2_xXwg5T5-mU",
  authDomain: "cris-mir.firebaseapp.com",
  projectId: "cris-mir",
  storageBucket: "cris-mir.appspot.com",
  messagingSenderId: "828291141357",
  appId: "1:828291141357:web:ef4d9a5bb293487346c6e4",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

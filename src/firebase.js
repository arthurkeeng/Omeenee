import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTaTzwHHHtWfqYESbDUh0mEB8yAygFrA4",
  authDomain: "omeenee-b6b8d.firebaseapp.com",
  projectId: "omeenee-b6b8d",
  storageBucket: "omeenee-b6b8d.appspot.com",
  messagingSenderId: "1096211876432",
  appId: "1:1096211876432:web:f27db04e29b85350fddf55",
  measurementId: "G-GEJNYSHHEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
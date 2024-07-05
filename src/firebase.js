//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCpS2gsb2tenMy_i6-41ICQ_L263lJxtc0",
//   authDomain: "realtor-clone-1261a.firebaseapp.com",
//   projectId: "realtor-clone-1261a",
//   storageBucket: "realtor-clone-1261a.appspot.com",
//   messagingSenderId: "262401590220",
//   appId: "1:262401590220:web:af160f0cca9b9aa4795369"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// export const db=getFirestore()
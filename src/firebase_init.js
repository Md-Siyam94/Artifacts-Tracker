// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
apiKey: "AIzaSyAAC0NItQd9LHNTRZSk7coLYJqWfMBg8iQ",
authDomain: "artifacts-tracker-d3d13.firebaseapp.com",
projectId: "artifacts-tracker-d3d13",
storageBucket: "artifacts-tracker-d3d13.firebasestorage.app",
messagingSenderId: "1043667095802",
appId: "1:1043667095802:web:9882b10377724005883943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;
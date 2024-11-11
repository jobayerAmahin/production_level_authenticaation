// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOAieGZ1Y0cvVJqUXOBMyOa7nsKKhK-hM",
  authDomain: "production-level-auth.firebaseapp.com",
  projectId: "production-level-auth",
  storageBucket: "production-level-auth.firebasestorage.app",
  messagingSenderId: "515920429145",
  appId: "1:515920429145:web:e78f5e2e8f8af557b47148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
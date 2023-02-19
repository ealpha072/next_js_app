// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZS6X-u30pLdm-vDgFPvgIHZm4eI6nueY",
  authDomain: "nextjsapp-19d35.firebaseapp.com",
  projectId: "nextjsapp-19d35",
  storageBucket: "nextjsapp-19d35.appspot.com",
  messagingSenderId: "575407624442",
  appId: "1:575407624442:web:0d3d103a48bf6673aab943",
  measurementId: "G-STN44EE6KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
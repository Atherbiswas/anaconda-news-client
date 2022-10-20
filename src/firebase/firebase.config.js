// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDExOLHZBUnrK19Kqp3N0AR99wadzlo5tg",
  authDomain: "anaconda-news-client.firebaseapp.com",
  projectId: "anaconda-news-client",
  storageBucket: "anaconda-news-client.appspot.com",
  messagingSenderId: "519694248971",
  appId: "1:519694248971:web:9941dc298abb404cbb6b0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
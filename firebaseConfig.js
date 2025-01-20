// import dotenv from 'dotenv';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

// Load environment variables
// dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyAFUEQxm6vJb3BkMQmoUEvVhjVowVPj1XM",
    authDomain: "quit-smoking-around.firebaseapp.com",
    databaseURL: "https://quit-smoking-around-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quit-smoking-around",
    storageBucket: "quit-smoking-around.firebasestorage.app",
    messagingSenderId: "105905148242",
    appId: "1:105905148242:web:35bf6a1cabeb73b0006a8b"
};

const app = initializeApp(firebaseConfig.js);
const auth = getAuth(app)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { auth, analytics, db }
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcKpjZQf6ahVpMJxDY3XjR4NRZ3meSE7g",
    authDomain: "chat-app-5710b.firebaseapp.com",
    projectId: "chat-app-5710b",
    storageBucket: "chat-app-5710b.appspot.com",
    messagingSenderId: "120879546792",
    appId: "1:120879546792:web:279ec8efbbfa42ef9e9d9d",
    measurementId: "G-XQRSG00BEJ"
}

firebase.initializeApp(firebaseConfig)

export default firebase
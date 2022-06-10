
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js"
// import { firestore } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyDEIL-tVv7QUJVZUmhKLgapHu7NzYEU2Zk",
  authDomain: "authblogtest.firebaseapp.com",
  projectId: "authblogtest",
  storageBucket: "authblogtest.appspot.com",
  messagingSenderId: "661897375922",
  appId: "1:661897375922:web:d91de36a5171965a6359ab"
}

const app = initializeApp(firebaseConfig)


let email = 'krzszk96@gmail.com'
let password = '123'
// let email = document.getElementById('email').value
// let password = document.getElementById('passwd').value

const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
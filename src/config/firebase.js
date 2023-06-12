// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const landingPagefirebaseConfig = {
  apiKey: 'AIzaSyALGfBtoopH6hRj4OoOZ43g50-iBriALMQ',
  authDomain: 'green-litter-bug-3a4f2.firebaseapp.com',
  projectId: 'green-litter-bug-3a4f2',
  storageBucket: 'green-litter-bug-3a4f2.appspot.com',
  messagingSenderId: '528809575709',
  appId: '1:528809575709:web:7cc9305ee4fe034ad50df4',
  measurementId: 'G-DCBXPSVGJ2',
}

// Initialize Firebase
const app = initializeApp(landingPagefirebaseConfig)
const analytics = getAnalytics(app)

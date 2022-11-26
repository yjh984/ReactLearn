import fb from 'firebase';
// import {doc, deleteDoc} from 'firebase/firestore';
// import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQsQv0VOAm9DLhKi5o5h_CmgtOIq4uayE",
  authDomain: "book-app-311ee.firebaseapp.com",
  projectId: "book-app-311ee",
  storageBucket: "book-app-311ee.appspot.com",
  messagingSenderId: "417960468844",
  appId: "1:417960468844:web:80ad19490ddbd30727d349",
  measurementId: "G-VY9LTVD173"
};


// const app = fb.initializeApp(firebaseConfig);
fb.initializeApp(firebaseConfig);
const db = fb.firestore();
// const db = fb.firestore();

// const app = initializeApp(firebaseConfig);
// const DB = app.firestore();
// const DB=app;

const storage = fb.storage();
const storageRef = storage.ref();
const auth = fb.auth();
// const docDelete = storageRef.delete();
// const fireDoc = doc;

export {storage, storageRef, auth};
export default db;
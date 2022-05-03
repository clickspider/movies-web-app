// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  connectAuthEmulator,
} from "firebase/auth";

import {
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { FirebaseConfig, FirestoreSettings } from "./types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyBNT3gfDk54KPWeVyv_uetlG8pJ7OzMONs",
  authDomain: "movies-web-app-db76b.firebaseapp.com",
  projectId: "movies-web-app-db76b",
  storageBucket: "movies-web-app-db76b.appspot.com",
  messagingSenderId: "332459251963",
  appId: "1:332459251963:web:1ff15ea0c569bd4bc2385e",
  measurementId: "G-22WZKJBV2E",
  databaseURL: "http://localhost:8080",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = firebase.firestore();

const shouldUseEmulator = process.env.NODE_ENV === "development"; // or other logic to determine when to use

const firestoreSettings: FirestoreSettings = {
  host: "",
  ssl: false,
};

// Pass long polling setting to Firestore when running in Cypress
// @ts-ignore
if (window.Cypress) {
  // Needed for Firestore support in Cypress (see https://github.com/cypress-io/cypress/issues/6350)
  db.settings({
    experimentalForceLongPolling: true,
  });
}

// Emulate Auth & Firestore
if (shouldUseEmulator) {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  firestoreSettings.host = "localhost:8080";
  firestoreSettings.ssl = false;
  firebaseConfig.databaseURL = `http://localhost:8080?ns=${firebaseConfig.projectId}`;
  console.debug(`Using RTDB emulator: ${firebaseConfig.databaseURL}`);
  console.debug(`Using Auth emulator: http://localhost:9099/`);
}

export {
  onAuthStateChanged,
  signInWithPopup,
  provider,
  auth,
  signOut,
  db,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
  firebase,
  firebaseConfig,
};

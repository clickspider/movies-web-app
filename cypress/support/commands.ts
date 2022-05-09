import { firebase, firebaseConfig } from "../../src/common/fbConfig";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

// Emulate RTDB if Env variable is passed
const rtdbEmulatorHost = Cypress.env("FIREBASE_DATABASE_EMULATOR_HOST");
if (rtdbEmulatorHost) {
  firebaseConfig.databaseURL = `http://${rtdbEmulatorHost}?ns=${firebaseConfig.projectId}`;
}

// Emulate Firestore if Env variable is passed
const firestoreEmulatorHost = Cypress.env("FIRESTORE_EMULATOR_HOST");
if (firestoreEmulatorHost) {
  firebase.firestore().settings({
    host: firestoreEmulatorHost,
    ssl: false,
  });
}

const authEmulatorHost = Cypress.env("FIREBASE_AUTH_EMULATOR_HOST");
if (authEmulatorHost) {
  firebase.auth().useEmulator(`http://${authEmulatorHost}/`);
  console.debug(`Using Auth emulator: http://${authEmulatorHost}/`);
}

attachCustomCommands({
  Cypress,
  cy,
  firebase,
});

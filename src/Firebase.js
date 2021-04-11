import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiojIeFLFk7d7R3LnxqIY2MfI42_ZxKPo",
  authDomain: "slackio-cloneo.firebaseapp.com",
  projectId: "slackio-cloneo",
  storageBucket: "slackio-cloneo.appspot.com",
  messagingSenderId: "25967026960",
  appId: "1:25967026960:web:13913ff4720ff769e83b95",
  measurementId: "G-WHDMDFNQXB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = new firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// export { auth };
export { auth, provider };
export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuWUSoSDlSMxlH3AwS33s8xBpd-1mrWRU",
  authDomain: "discord-clone-fed42.firebaseapp.com",
  databaseURL: "https://discord-clone-fed42.firebaseio.com",
  projectId: "discord-clone-fed42",
  storageBucket: "discord-clone-fed42.appspot.com",
  messagingSenderId: "385003927300",
  appId: "1:385003927300:web:1174af0b35437171114251",
  measurementId: "G-3HWSWXBMH8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

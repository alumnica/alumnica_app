import * as firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPaI00Ra3pqyBAA7BpVQXmCJRA4Co7hIo",
  authDomain: "test-alumnica.firebaseapp.com",
  databaseURL: "https://test-alumnica.firebaseio.com",
  projectId: "test-alumnica",
  storageBucket: "test-alumnica.appspot.com",
  messagingSenderId: "640760179671",
  appId: "1:640760179671:web:db1b6d75ca596243e3f992",
  measurementId: "G-MHW5MBT26H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();



export default db;

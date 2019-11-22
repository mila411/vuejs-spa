import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD3JmMWlcna31pudlMxvpUFSeLgAf_nu_0",
  authDomain: "hedgehogs-proud.firebaseapp.com",
  databaseURL: "https://hedgehogs-proud.firebaseio.com",
  projectId: "hedgehogs-proud",
  storageBucket: "hedgehogs-proud.appspot.com",
  messagingSenderId: "592208514293",
  appId: "1:592208514293:web:1400c2131f9daeb398c9bc",
  measurementId: "G-BN68C5Y91B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

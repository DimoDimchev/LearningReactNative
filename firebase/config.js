import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBTAlYi7t0VFthXWWRyWEQitzCm8osW-hM",
    authDomain: "react-native-reviews.firebaseapp.com",
    databaseURL: "https://react-native-reviews-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "react-native-reviews",
    storageBucket: "react-native-reviews.appspot.com",
    messagingSenderId: "374359382063",
    appId: "1:374359382063:web:56b3b0e58a5f2d481eceda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export { firebase };
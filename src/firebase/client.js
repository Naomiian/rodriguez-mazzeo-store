import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBG3zkSS6CW-vQTatpBQ8rkY6SIzXvTOhg",
  authDomain: "jrmstore-32890.firebaseapp.com",
  projectId: "jrmstore-32890",
  storageBucket: "jrmstore-32890.appspot.com",
  messagingSenderId: "512102272991",
  appId: "1:512102272991:web:37256c823d22630b54fe6a",
});
export const getFirebase = () => {
  return firebaseConfig;
};

export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
};

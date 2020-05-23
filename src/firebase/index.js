import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "../config/firebaseSecret.json";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  return firebase.auth().signInWithPopup(provider);
};

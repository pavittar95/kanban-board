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

export const firebaseMiddleware = (store) => (next) => (action) => {
  firebase.auth().onAuthStateChanged((user, error) => {
    console.log("onAuthStateChanged user------------", user);
    console.log("onAuthStateChanged error------------", error);
  });
  taskAddedOnfirebase();
  next(action);
};

const taskAddedOnfirebase = () => {
  // firebase
  //   .database()
  //   .ref("/tasks")
  //   .once("child_added", (snapshot, prevChildKey) => {
  //     var newPost = snapshot.val();
  //     console.log("newPost------------ ", newPost);
  //     console.log("prevChildKey--------", prevChildKey);
  //   });
  // .on("child_removed", (snapshot) => {
  //   var deletedPost = snapshot.val();
  //   console.log(
  //     "The Task titled '" + deletedPost.title + "' has been deleted"
  //   );
  // });
};

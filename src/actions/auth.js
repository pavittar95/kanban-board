import { signInWithGoogle } from "../firebase";

export const LOGIN = "LOGIN";
export const userlogin = (data) => ({ type: LOGIN, data });

export const LOGOUT = "LOGOUT";

export const login = () => (dispatch, state) => {
  signInWithGoogle()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log("token----------", token);
      dispatch(
        userlogin({
          token,
          user: JSON.parse(JSON.stringify(user)),
        })
      );
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log("error----------", error);
    });
};

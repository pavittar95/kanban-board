import { signInWithGoogle, auth } from "../firebase";

export const LOGIN = "LOGIN";
export const userlogin = (data) => ({ type: LOGIN, data });

export const login = () => (dispatch, state) => {
  signInWithGoogle()
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      dispatch(
        userlogin({
          token,
          user: JSON.parse(JSON.stringify(user)),
        })
      );
    })
    .catch((error) => {
      // console.log("error----------", error);
    });
};

export const LOGOUT = "LOGOUT";

export const logout = () => (dispatch) => {
  auth.signOut();
  dispatch({ type: LOGOUT });
};

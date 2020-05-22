import React, { useCallback } from "react";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const signInWithGoogle = useCallback(() => {
    dispatch(login());
  }, [dispatch]);
  return (
    <div>
      <button onClick={signInWithGoogle}>Google</button>
    </div>
  );
}

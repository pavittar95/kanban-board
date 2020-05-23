import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { logout } from "../actions/auth";


export default function Header() {
  const history  = useHistory();
  const dispatch = useDispatch();
  const signout = useCallback(() => {
    dispatch(logout());
    history.push('/');
  }, [dispatch, history]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit" onClick={signout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

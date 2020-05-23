import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Paper, Grid, Button, Typography } from "@material-ui/core";
import { login } from "../../actions/auth";

export default function Login() {
  const dispatch = useDispatch();
  const signInWithGoogle = useCallback(() => {
    dispatch(login());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Paper elevation={3} style={{ textAlign: "center", padding: "20px" }}>
          <Typography variant="h3" component="h3">
            Login
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={signInWithGoogle}
          >
            Sign In Via Google
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

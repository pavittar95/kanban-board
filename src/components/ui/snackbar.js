import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, IconButton } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { closeSnackbar } from "../../actions/snackbar";

export default function SnackbarUI() {
  const dispatch = useDispatch();

  const { message, open } = useSelector((state) => state.snackbar);

  const handleClose = useCallback(() => {
    dispatch(closeSnackbar());
  }, [dispatch]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <CheckCircleIcon />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CancelIcon />
        </IconButton>,
      ]}
    />
  );
}

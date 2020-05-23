import React, { useState, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  DialogActions,
} from "@material-ui/core";
import { addColumnAction } from "../../actions/column";
import { useDispatch } from "react-redux";

export default function AddColumn({ open, handleClose }) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const submit = useCallback(() => {
    dispatch(
      addColumnAction({
        title: title,
        taskIds: [],
      })
    );
    handleClose();
    setTitle('');
  }, [dispatch, title, handleClose]);

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="add-task-dialog-title"
    >
      <DialogTitle id="add-task-dialog-title">Add Column</DialogTitle>
      <DialogContent>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
          noValidate
        >
          <TextField
            required
            label="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={submit}>
          Add
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

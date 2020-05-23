import React, { useState, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { addTaskAction } from "../../actions/task";
import { useDispatch, useSelector } from "react-redux";

export default function AddTask({ open, handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState("");

  const { columns } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clearInput = useCallback(() => {
    handleClose();
    setTitle("");
    setDescription("");
    setColumn("");
  }, [handleClose]);

  const submit = useCallback(() => {
    dispatch(
      addTaskAction({
        title: title,
        description: description,
        column,
      })
    );
    clearInput();
  }, [dispatch, title, description, column, clearInput]);

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="add-task-dialog-title"
    >
      <DialogTitle id="add-task-dialog-title">Add Task</DialogTitle>
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

          <TextField
            required
            label="Enter Description"
            multiline
            rowsMax={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormControl>
            <InputLabel id="select-column">Select Column</InputLabel>
            <Select
              required
              labelId="select-column"
              id="select-column"
              value={column}
              onChange={(e) => setColumn(e.target.value)}
            >
              {columns &&
                Object.entries(columns).map((item, i) => (
                  <MenuItem key={i} value={item[0]}>
                    {item[1].title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={submit}>
          {" "}
          Add{" "}
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

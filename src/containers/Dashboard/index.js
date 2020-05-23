import React, { Fragment, useState, useCallback, useEffect } from "react";
import {
  Grid,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import AddTask from "../../components/modal/addTask";
import AddColumn from "../../components/modal/addColumn";
import { fetchTaskAction } from "../../actions/task";
import TaskBoard from './TaskBoard';
import {
  fetchColumnAction,
  fetchColumnOrderAction,
} from "../../actions/column";

export default function Dashboard() {
  const [taskModal, setTaskModal] = useState(false);
  const [columnModal, setColumnModal] = useState(false);

  const dispatch = useDispatch();

  const getTasks = useCallback(() => {
    dispatch(fetchColumnOrderAction());
    dispatch(fetchTaskAction());
    dispatch(fetchColumnAction());
  }, [dispatch]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <Fragment>
      <Grid container justify="flex-end">
        <Button
          style={{ margin: "10px 10px 10px 0px" }}
          variant="contained"
          color="primary"
          onClick={() => setTaskModal(true)}
        >
          Add Task
        </Button>
        <Button
          style={{ margin: "10px 10px 10px 0px" }}
          variant="contained"
          color="secondary"
          onClick={() => setColumnModal(true)}
        >
          Add Column
        </Button>
      </Grid>
      <TaskBoard />
      <AddTask open={taskModal} handleClose={() => setTaskModal(false)} />
      <AddColumn open={columnModal} handleClose={() => setColumnModal(false)} />
    </Fragment>
  );
}

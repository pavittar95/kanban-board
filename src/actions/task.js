import firebase from "firebase/app";
import { showSnackbar } from "./snackbar";
import { setColumnTasks } from "./column";

const saveTask = (params) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/tasks")
      .push({
        ...params,
      })
      .then((res) => {
        resolve({ id: res.key, ...params });
      })
      .catch((err) => reject(err));
  });
};

export const ADD_TASK = "ADD_TASK";
export const add_task = (data) => ({ type: ADD_TASK, data });
export const addTaskAction = (params) => async (dispatch, state) => {
  try {
    let columnId = params.column;
    delete params.column;
    const data = await saveTask(params);
    dispatch(add_task(data));
    dispatch(setColumnTasks({ columnId, taskId: data.id }));
    showSnackbar("Task successfully added");
  } catch (e) {
    showSnackbar("Error while adding new tasks");
  }
};

const getTasks = () => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/tasks")
      .on("value", (snapshot) => {
        resolve(snapshot.val());
      });
  });
};

export const FETCH_TASK = "FETCH_TASK";
export const fetch_task = (data) => ({ type: FETCH_TASK, data });
export const fetchTaskAction = (params) => async (dispatch) => {
  try {
    const data = await getTasks(params);
    dispatch(fetch_task(data));
  } catch (e) {
    showSnackbar("Error while fetching tasks");
  }
};

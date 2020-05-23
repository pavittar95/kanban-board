import firebase from "firebase/app";
import { showSnackbar } from "./snackbar";

const saveColumn = (params) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/columns")
      .push({
        ...params,
      })
      .then((res) => {
        resolve({ id: res.key, ...params });
      })
      .catch((err) => reject(err));
  });
};

const updateColumn = (columnId, params) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref(`/columns/${columnId}`)
      .set({
        ...params,
      })
      .then((res) => {
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

const getColumns = () => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/columns")
      .on("value", (snapshot) => {
        resolve(snapshot.val());
      });
  });
};

export const ADD_COLUMN = "ADD_TASK";
export const add_column = (data) => ({ type: ADD_COLUMN, data });
export const addColumnAction = (params) => async (dispatch) => {
  try {
    const data = await saveColumn(params);
    dispatch(add_column(data));
    dispatch(setColumnOrder({ id: data.id }));
    showSnackbar("Task successfully added");
  } catch (e) {
    showSnackbar("Error while adding new tasks");
  }
};

export const FETCH_COLUMN = "FETCH_COLUMN";
export const fetch_column = (data) => ({ type: FETCH_COLUMN, data });
export const fetchColumnAction = (params) => async (dispatch, state) => {
  try {
    const data = await getColumns(params);
    if (data) {
      dispatch(fetch_column(data));
    } else {
      dispatch(addColumnAction({ title: "To Do" }));
    }
  } catch (e) {
    showSnackbar("Error while fetching columns");
  }
};

export const UPDATE_COLUMN = "UPDATE_COLUMN";
export const update_column = (data) => ({ type: UPDATE_COLUMN, data });
export const setColumnTasks = (params) => (dispatch, state) => {
  try {
    const columns = state().columns;
    const newColumn = { ...columns[params.columnId] };
    if (newColumn.taskIds) {
      newColumn.taskIds.push(params.taskId);
    } else {
      newColumn.taskIds = [params.taskId];
    }
    const data = updateColumn(params.columnId, newColumn);
    dispatch(update_column({ id: params.columnId, data: newColumn }));
  } catch (error) {
    showSnackbar("Error while updating column");
  }
};

// COLUMN ORDER
const getColumnOrder = () => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/columnOrder")
      .on("value", (snapshot) => {
        resolve(snapshot.val());
      });
  });
};

export const ADD_COLUMN_ORDER = "ADD_COLUMN_ORDER";
export const fetch_column_order = (data) => ({
  type: ADD_COLUMN_ORDER,
  data,
});
export const fetchColumnOrderAction = (params) => async (dispatch) => {
  try {
    const data = await getColumnOrder(params);
    dispatch(fetch_column_order(data));
  } catch (e) {
    showSnackbar("Error while fetching columns");
  }
};

const saveColumnOrder = (params) => {
  return new Promise((resolve, reject) => {
    firebase
      .database()
      .ref("/columnOrder")
      .set([...params])
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export const set_column_order_action = (data) => ({
  type: ADD_COLUMN_ORDER,
  data,
});
export const update_column_order_action = (data) => ({
  type: ADD_COLUMN_ORDER,
  data,
});
export const setColumnOrder = (params) => async (dispatch, state) => {
  try {
    let newOrder = [...state().columnOrder, params.id];
    const data = await saveColumnOrder(newOrder);
    console.log("setColumnOrder--------------", newOrder);
    dispatch(set_column_order_action(newOrder));
    showSnackbar("Task successfully added");
  } catch (e) {
    showSnackbar("Error while adding new tasks");
  }
};

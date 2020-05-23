import columnOrder from "../reducers/modules/columnOrder";
import { ADD_COLUMN_ORDER } from "../actions/column";
import uiReducer from "../reducers/modules/snackbar";
import { SNACKBAR_SUCCESS } from "../actions/snackbar";

test("Column Order reducer testing", () => {
  const data = ["column-1", "column-2", "column-3", "column-4"];
  const action = {
    type: ADD_COLUMN_ORDER,
    data,
  };
  expect(columnOrder([], action)).toEqual(data);
});

test("Snackbar reducer testing", () => {
  const intialState = {
    open: true,
    message: "test",
  };
  const action = {
    type: SNACKBAR_SUCCESS,
    message: "test",
  };
  expect(uiReducer({}, action)).toEqual(intialState);
});

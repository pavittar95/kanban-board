import {
  fetch_column_order,
  ADD_COLUMN_ORDER,
  add_column,
  ADD_COLUMN,
} from "../actions/column";
import { ADD_TASK, add_task } from "../actions/task";

test("Column order action test case", () => {
  const data = ["column-1", "column-2", "column-3", "column-4"];
  expect(fetch_column_order(data)).toEqual({
    type: ADD_COLUMN_ORDER,
    data,
  });
});

test("Add column action test case", () => {
  const data = {
    title: "column-1",
    taskIds: ["task-1"],
  };
  expect(add_column(data)).toEqual({
    type: ADD_COLUMN,
    data,
  });
});

test("Add task action test case", () => {
  const data = {
    title: "test 1",
    description: "test 1 description",
  };
  expect(add_task(data)).toEqual({
    type: ADD_TASK,
    data,
  });
});

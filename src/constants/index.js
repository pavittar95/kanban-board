export const data = {
  tasks: {
    t1: {
      id: "t1",
      content: "Task 1",
    },
    t2: {
      id: "t2",
      content: "Task 2",
    },
    t3: {
      id: "t3",
      content: "Task 3",
    },
    t4: {
      id: "t4",
      content: "Task 4",
    },
    t5: {
      id: "t5",
      content: "Task 5",
    },
    t6: {
      id: "t6",
      content: "Task 6",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["t1", "t2", "t3", "t4", "t5", "t6"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

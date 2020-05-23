import { LOGOUT } from "../../actions/auth";
import { FETCH_TASK, ADD_TASK } from "../../actions/task";

const initialState = {};
const tasks = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...initialState };
    case FETCH_TASK:
      return { ...action.data };
    case ADD_TASK:
      return { ...state, [action.data.id]: action.data };
    default:
      return { ...state };
  }
};

export default tasks;

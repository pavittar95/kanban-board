import { LOGOUT } from "../../actions/auth";
import { FETCH_COLUMN, ADD_COLUMN } from "../../actions/column";
const initialState = {};
const columns = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...initialState };
    case FETCH_COLUMN:
      return { ...action.data };

    case ADD_COLUMN:
      return { ...state, [action.data.id]: action.data };
    default:
      return { ...state };
  }
};

export default columns;

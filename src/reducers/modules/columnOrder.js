import { LOGOUT } from "../../actions/auth";
import { ADD_COLUMN_ORDER } from "../../actions/column";

const initialState = [];
const columnOrder = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return [ ...initialState ];
    case ADD_COLUMN_ORDER:
      return [ ...action.data ];
    default:
      return [...state];
  }
};

export default columnOrder;

import { SNACKBAR_SUCCESS, SNACKBAR_CLOSE } from "../../actions/snackbar";

const intialState = {
  open: false,
  message: "",
};

const uiReducer = (state = intialState, action) => {
  switch (action.type) {
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        open: true,
        message: action.message,
      };
    case SNACKBAR_CLOSE:
      return {
        ...state,
        open: false,
        message: "",
      };
    default:
      return state;
  }
};

export default uiReducer;

import { LOGOUT } from "../../actions/auth";

const initialState = {
  islogin: false,
};
const columnOrder = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      state.islogin = false;
      return { ...initialState };
    default:
      return state;
  }
};

export default columnOrder;

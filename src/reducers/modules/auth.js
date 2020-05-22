import { LOGIN, LOGOUT } from "../../actions/auth";

const initialState = {
  islogin: false,
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state.islogin = true;
      return { ...state, ...action.data };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default auth;

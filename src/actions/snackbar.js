export const SNACKBAR_SUCCESS = "SNACKBAR_SUCCESS";
export const showSnackbar = (message) => {
  return (dispatch) => {
    dispatch({ type: SNACKBAR_SUCCESS, message });
  };
};

export const SNACKBAR_CLOSE = "SNACKBAR_CLOSE";
export const closeSnackbar = () => {
  return (dispatch) => {
    dispatch({ type: SNACKBAR_CLOSE });
  };
};

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default (history) => {
  const store = createStore(
    rootReducer(history),
    applyMiddleware(logger, thunk, routerMiddleware(history))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

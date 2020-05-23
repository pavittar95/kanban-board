import encryptor from "./encryptor";
import { persistCombineReducers } from "redux-persist";
import { connectRouter } from "connected-react-router";
import storage from "redux-persist/es/storage";
import auth from "./modules/auth";
import columnOrder from "./modules/columnOrder";
import columns from "./modules/columns";
import tasks from "./modules/tasks";
import snackbar from "./modules/snackbar";

const PersistConfig = {
  key: "admin-app",
  storage: storage,
  transforms: [encryptor],
};

export default (history) =>
  persistCombineReducers(PersistConfig, {
    router: connectRouter(history),
    auth,
    columnOrder,
    columns,
    tasks,
    snackbar
  });

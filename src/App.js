import React from "react";
import "@atlaskit/css-reset";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import createStore from "./store";
import Routes from "./routes";
import theme from "./styles/theme";
import SnackbarUI from "./components/ui/snackbar";
const history = createBrowserHistory();

const { store, persistor } = createStore(history);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <SnackbarUI />
            <CssBaseline />
            <ToastContainer />
            <Routes {...store} />
          </ThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./appRoute";
import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";
import Layout from "../components/Layout";

export default function Routes(store) {
  return (
    <Switch>
      <AppRoute
        type="public"
        path="/"
        exact
        ChildComponent={Login}
        Layout={Fragment}
        store={store}
      />
      <AppRoute
        type="private"
        path="/dashboard"
        exact
        ChildComponent={Dashboard}
        Layout={Layout}
        store={store}
      />
    </Switch>
  );
}

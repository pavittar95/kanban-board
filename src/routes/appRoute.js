import React from "react";
import { Route } from "react-router-dom";

export default function AppRoute({ ChildComponent, ...rest }) {
  return <Route {...rest} render={(props) => <ChildComponent {...props} />} />;
}

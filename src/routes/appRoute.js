import React from "react";
import { Route } from "react-router-dom";

export default function AppRoute({ Layout, ChildComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <ChildComponent {...props} />
        </Layout>
      )}
    />
  );
}

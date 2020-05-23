import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AppRoute({
  store,
  Layout,
  ChildComponent,
  to = "/",
  type = 'private',
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const islogin = store.getState().auth.islogin;
        if (islogin && props.location.pathname === "/") {
          return (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: props.location },
              }}
            />
          );
        }
        if (type === "public") {
          return (
            <Layout>
              <ChildComponent {...props} />
            </Layout>
          );
        }
        return islogin || props.location.pathname === "/" ? (
          <Layout>
            <ChildComponent {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

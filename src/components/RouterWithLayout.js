import React from "react";
import { Route } from "react-router-dom";
const RouteWithLayout = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
export default RouteWithLayout;

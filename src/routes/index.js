import React from "react";
import { Switch } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import RouteWithLayout from "../components/RouterWithLayout";
import ProductDetails from "../pages/product/ProductDetails";
import ProductList from "../pages/product/ProductList";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        path="/product-list"
        component={ProductList}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/product/:id"
        component={ProductDetails}
        layout={MainLayout}
      />
    </Switch>
  );
};


export default Routes;

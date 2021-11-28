import React from "react";
import { Switch } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import RouteWithLayout from "../components/RouterWithLayout";
import ProductDetails from "../pages/product/ProductDetails";
import ProductList from "../pages/product/ProductList";
import ContactUs from "../pages/ContactUs";
import Cart from "../pages/cart";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        path="/"
        component={ProductList}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/product/:id"
        component={ProductDetails}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/cart"
        component={Cart}
        layout={MainLayout}
      />
      <RouteWithLayout
        exact
        path="/contact-us"
        component={ContactUs}
        layout={MainLayout}
      />
    </Switch>
  );
};

export default Routes;

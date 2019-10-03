import React from 'react';
import { Route, Switch } from "react-router-dom";
import AuthRoute from "../util/route_util";
import '../App.css';
import ProductIndex from "./products/ProductIndex";
import Login from "./Login";
import NavBar from "./Nav";
import Register from "./Register";
import ProductShow from "./products/Productshow";
import ProductNew from "./products/CreateProduct";

function App() {
  return (
    <div>
    <h1>Online Store</h1>
    <NavBar />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute exact path="/signup" component={Register} routeType="auth" />
        <AuthRoute exact path="/product/new" component={ProductNew} />
        <Route path="/product/:id" component={ProductShow} />
        <Route exact path="/" component={ProductIndex} />
      </Switch>
    </div>
  );
};

export default App;

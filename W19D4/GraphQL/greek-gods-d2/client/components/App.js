import React from "react";
import { Route, Switch } from "react-router-dom";
import GodsList from "./gods/GodsList";
import GodCreate from "./create/GodCreate";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/new" component={GodCreate} />
        <Route exact path="/" component={GodsList} />
      </Switch>
    </div>
  );
};

export default App;

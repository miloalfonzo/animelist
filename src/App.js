import React from "react";
import Home from "./views/Home";
import Show from "./views/Show";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/search" component={Home}></Route>
      <Route exact path="/search/:id" component={Show}></Route>
      <Redirect to="/search"></Redirect>
    </Switch>
  );
}

export default App;

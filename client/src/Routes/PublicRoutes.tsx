import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/pages/Home";
import PageNotFound from "../components/pages/PageNotFound";

export default function PublicRoutes() {
  return (
    <>
      <h1>PUBLIC ROUTES</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

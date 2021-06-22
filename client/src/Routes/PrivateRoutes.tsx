import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Hidden from "../components/Layouts/heart/Hidden";
import PageNotFound from "../components/pages/PageNotFound";

export default function PrivateRoutes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Hidden />
          </Route>
          <Route exact path="/404">
            <PageNotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

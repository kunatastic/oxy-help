import React from "react";
import { MapContainer } from "react-leaflet";
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
      <MapContainer
        style={{ height: "100vh" }}
        center={[28.63576, 77.22445]}
        zoom={5}
        s
        scrollWheelZoom={true}
      >
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
      </MapContainer>
    </>
  );
}

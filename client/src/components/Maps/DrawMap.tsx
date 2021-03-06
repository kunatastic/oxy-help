import React from "react";

import { TileLayer } from "react-leaflet";
// import "./mapdesign.css";

import PlotMarkers from "./PlotMarkers";

export default function DrawMap() {
  return (
    <>
      <TileLayer
        attribution='&amp;copy <a href="https://studio.mapbox.com">MapBox</a> contributors'
        accessToken="pk.eyJ1Ijoia3VuYWxqaGEiLCJhIjoiY2ttaGY2dTVmMDZyZTJ3cXU4MDNuOWo4MSJ9.Y_1jJVdDJGDRq83eO_UY_w"
        url="https://api.mapbox.com/styles/v1/kunaljha/ckmhfkzqz2my717nrjr5n3rcl/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}"
      />
      <PlotMarkers />
    </>
  );
}

import React, { useState } from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "./mapdesign.css";
import UserLocationMarker from "./UserLocationMarker";
import MyMarker from "./MyMarker";

export default function DrawMap() {
  const [position, setPosition] = useState<null | LatLngExpression>();

  const allPosition = [
    [29.96233, 79.80404],
    [26.11499, 70.76891],
    [26.80592, 71.53548],
    [29.50523, 71.31991],
    [29.66089, 78.70158],
    [29.93368, 73.55608],
    [31.56122, 78.14496],
    [33.34253, 72.5319],
    [26.11327, 70.77715],
    [33.36671, 72.54344],
  ];

  return (
    <>
      <MapContainer
        className="map"
        center={[28.63576, 77.22445]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="https://studio.mapbox.com">MapBox</a> contributors'
          accessToken="pk.eyJ1Ijoia3VuYWxqaGEiLCJhIjoiY2ttaGY2dTVmMDZyZTJ3cXU4MDNuOWo4MSJ9.Y_1jJVdDJGDRq83eO_UY_w"
          url="https://api.mapbox.com/styles/v1/kunaljha/ckmhfkzqz2my717nrjr5n3rcl/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}"
        />
        {position == null ? null : (
          <UserLocationMarker position={position} setPosition={setPosition} />
        )}
        {allPosition.map((pos) => (
          <MyMarker position={pos} msg={pos} key={pos} />
        ))}
      </MapContainer>
    </>
  );
}

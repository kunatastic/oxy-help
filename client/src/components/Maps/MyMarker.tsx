import L, { LatLngExpression } from "leaflet";
import React from "react";
import { Circle, Marker, Popup } from "react-leaflet";

var myIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  popupAnchor: [0, 0],
});

export default function MyMarker({
  position,
  msg,
  zoomLevel,
  pathOptions,
}: {
  position: LatLngExpression;
  msg: String;
  zoomLevel: number;
  pathOptions: L.PathOptions;
}) {
  var rad = Math.max(
    Math.ceil(Math.pow(0.8, 20 - zoomLevel) * Math.exp(20 - zoomLevel)),
    Math.exp(zoomLevel)
  );
  return (
    <>
      <Marker position={position} icon={myIcon}>
        <Popup>{msg}</Popup>
      </Marker>
      {console.log(zoomLevel, rad)}
      <Circle center={position} radius={rad} pathOptions={pathOptions} />
    </>
  );
}

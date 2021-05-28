import L from "leaflet";
import React from "react";
import { Circle, Marker, Popup } from "react-leaflet";

var myIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  popupAnchor: [0, 0],
});

export default function MyMarker({ position, msg }: any) {
  return (
    <>
      <Marker position={position} icon={myIcon}>
        <Popup>{msg}</Popup>
      </Marker>
      <Circle center={position} radius={20000} />
    </>
  );
}

import { Box } from "@chakra-ui/layout";
import { LatLngExpression } from "leaflet";
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function DrawMap() {
  const [position, setPosition] =
    useState<undefined | LatLngExpression>(undefined);
  setPosition({ lat: 51.505, lng: -0.09 });
  return (
    <>
    <div>

      <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
          </div>
  );
}

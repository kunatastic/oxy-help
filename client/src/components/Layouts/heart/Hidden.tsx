import { Box } from "@chakra-ui/layout";
import React from "react";
import { MapContainer } from "react-leaflet";
import AddModel from "../../Maps/AddModel";
import DrawMap from "../../Maps/DrawMap";
import HiddenNav from "./HiddenNav";

export default function Hidden() {
  return (
    <>
      <Box height="100vh" color="blue.200">
        <MapContainer
          style={{ height: "100vh" }}
          center={[28.63576, 77.22445]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <HiddenNav />
          <AddModel />
          <DrawMap />
        </MapContainer>
      </Box>
    </>
  );
}

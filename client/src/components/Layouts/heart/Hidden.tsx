import { Box } from "@chakra-ui/layout";
import React from "react";
import AddModel from "../../Maps/AddModel";
import DrawMap from "../../Maps/DrawMap";
import HiddenNav from "./HiddenNav";

export default function Hidden() {
  return (
    <>
      <Box height="100vh" color="blue.200">
        <AddModel />
        <HiddenNav />
        <DrawMap />
      </Box>
    </>
  );
}

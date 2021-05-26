import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";
import HomeButtons from "./HomeButtons";

export default function HomeNav() {
  return (
    <Flex>
      <Box p="2">
        <Heading size="md">Oxygen Care</Heading>
      </Box>
      <Spacer />
      <HomeButtons />
    </Flex>
  );
}

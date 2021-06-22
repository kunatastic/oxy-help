import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";
import Logout from "../../auth/Logout";

export default function HiddenNav() {
  return (
    <>
      <Container
        maxW="container.lg"
        pt="2"
        zIndex="2000"
        position="absolute"
        left="20%"
        top="10px"
      >
        <Flex>
          <Box p="2">
            <Heading size="md">Oxygen Care</Heading>
          </Box>
          <Spacer />
          <Logout />
        </Flex>
      </Container>
    </>
  );
}

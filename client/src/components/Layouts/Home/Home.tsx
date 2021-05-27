import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import HomeNav from "./HomeNav";

export default function Home() {
  return (
    <>
      <Box
        height="100vh"
        bg="blue.900"
        color="blue.200"
        border="2"
        borderColor="pink"
      >
        <Container maxW="container.lg" pt="2">
          <HomeNav />
        </Container>
      </Box>
    </>
  );
}

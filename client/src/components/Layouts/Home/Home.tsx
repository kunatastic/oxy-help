import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import HomeNav from "./HomeNav";

export default function Home() {
  return (
    <>
      <Box height="100vh" border="2">
        <Container maxW="container.lg" pt="2">
          <HomeNav />
        </Container>
      </Box>
    </>
  );
}

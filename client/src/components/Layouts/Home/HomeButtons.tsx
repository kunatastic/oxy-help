import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeButtons() {
  return (
    <>
      <Flex>
        <Box>
          <Link to="/login">
            <Button colorScheme="blue" width="24">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="blue" ml="4" width="24">
              Register
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

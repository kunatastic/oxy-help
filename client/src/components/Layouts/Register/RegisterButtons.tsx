import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function RegisterButtons() {
  return (
    <>
      <Flex>
        <Box>
          <Link to="/">
            <Button colorScheme="blue" width="24">
              Home
            </Button>
          </Link>
          <Link to="/login">
            <Button colorScheme="blue" ml="4" width="24">
              Log in
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

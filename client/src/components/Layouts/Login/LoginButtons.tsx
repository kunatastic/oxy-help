import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function LoginButtons() {
  return (
    <>
      <Flex>
        <Box>
          <Link to="/">
            <Button colorScheme="blue" width="24">
              Home
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

import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Box position="absolute" height="100vh" width="100%" bg="blue.900">
      <Flex
        flexDirection="column"
        mt={{ md: "30vh", sm: "25vh", base: "20vh" }}
      >
        <Center m="auto">
          <Text
            fontSize={{ md: "8xl", sm: "7xl", base: "6xl" }}
            color="blue.200"
          >
            404 Page Not Found
          </Text>
        </Center>
        <Center>
          <Link to="/">
            <Button colorScheme="blue">Lets go to Home 🏠</Button>
          </Link>
        </Center>
      </Flex>
    </Box>
  );
}

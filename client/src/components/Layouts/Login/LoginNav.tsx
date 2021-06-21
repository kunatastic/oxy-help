import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Button, useColorMode } from "@chakra-ui/react";
import LoginButtons from "./LoginButtons";

export default function LoginNav() {
  return (
    <Flex>
      <Box p="2">
        <Heading size="md">Oxygen Care</Heading>
      </Box>
      {/* <Example /> */}
      <Spacer />
      <LoginButtons />
    </Flex>
  );
}
function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}

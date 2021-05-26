import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import LoginButtons from "./LoginButtons";

export default function LoginNav() {
  return (
    <Flex>
      <Box p="2">
        <Heading size="md">Oxygen Care</Heading>
      </Box>
      <Spacer />
      <LoginButtons />
    </Flex>
  );
}

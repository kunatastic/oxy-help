import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import RegisterButtons from "./RegisterButtons";

export default function RegisterNav() {
  return (
    <Flex>
      <Box p="2">
        <Heading size="md">Oxygen Care</Heading>
      </Box>
      <Spacer />
      <RegisterButtons />
    </Flex>
  );
}

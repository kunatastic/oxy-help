import { Box, Center, Container, Grid, Text } from "@chakra-ui/layout";
import LoginButtons from "../Layouts/Login/LoginButtons";
import LoginForm from "../Layouts/Login/LoginForm";
import LoginNav from "../Layouts/Login/LoginNav";

export default function Login() {
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
          <LoginNav />
          <Center
            mx="auto"
            height={{ md: "60vh", base: "auto" }}
            py={{ md: "20vh", base: "10vh" }}
            my="10vh"
            w="60%"
            bg="blue.200"
            borderRadius="xl"
            boxShadow="dark-lg"
          >
            <Grid mx={{ base: "4", md: "12" }}>
              <Text
                fontSize="30"
                fontFamily="sans-serif"
                color="pink.600"
                mb="3"
              >
                Login
              </Text>
              <LoginForm />
              <LoginButtons />
            </Grid>
          </Center>
        </Container>
      </Box>
    </>
  );
}

import { Box, Center, Container, Grid, Text } from "@chakra-ui/layout";
import RegisterButtons from "../Layouts/Register/RegisterButtons";
import RegisterForm from "../Layouts/Register/RegisterForm";
import RegisterNav from "../Layouts/Register/RegisterNav";

export default function Register() {
  return (
    <>
      <Box height="100vh">
        <Container maxW="container.lg" pt="2">
          <RegisterNav />
          <Center
            mx="auto"
            height={{ md: "60vh", base: "auto" }}
            py={{ md: "20vh", base: "10vh" }}
            my="10vh"
            w="60%"
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
                Register
              </Text>
              <RegisterForm />
              <RegisterButtons />
            </Grid>
          </Center>
        </Container>
      </Box>
    </>
  );
}

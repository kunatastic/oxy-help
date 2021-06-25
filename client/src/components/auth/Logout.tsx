import { Button } from "@chakra-ui/button";
import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
  const login = useContext(AuthContext);

  const history = useHistory();

  const logout = async () => {
    await axios.get("http://localhost:5000/auth/logout");

    await login?.getLoggedIn();
    history.push("/");
  };

  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      colorScheme="pink"
      borderColor="red.500"
      onClick={logout}
    >
      Logout
    </Button>
  );
}

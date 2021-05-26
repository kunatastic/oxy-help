import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logininfo = useContext(AuthContext);
  const history = useHistory();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const loginUser = {
        email,
        password,
      };
      // console.log(loginUser);

      const response = await axios.post("/auth/login", loginUser);
      console.log(response.data);

      logininfo?.getLoggedIn();
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={login}>
      <Input
        variant="filled"
        color="black"
        type="email"
        placeholder="Enter the Email here..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        autoComplete="off"
        mb="3"
      />
      <Input
        color="black"
        variant="filled"
        type="password"
        placeholder="Enter the password here..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        autoComplete="off"
        mb="3"
      />
      <Button width="24" colorScheme="pink" type="submit" mb="3">
        Log in
      </Button>
    </form>
  );
}

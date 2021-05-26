import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const logininfo = useContext(AuthContext);
  const history = useHistory();

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const registerUser = {
        email,
        password,
        passwordVerify,
      };
      // console.log(registerUser);

      // const response = await axios.post("/auth/", registerUser);
      await axios.post("/auth/", registerUser);
      // console.log(response.data);

      logininfo?.getLoggedIn();
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={register}>
      <Input
        color="black"
        variant="filled"
        type="email"
        placeholder="Enter the Email here..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="off"
        required
        mb="3"
      />
      <Input
        color="black"
        variant="filled"
        type="password"
        placeholder="Enter the password here..."
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        value={password}
        required
        mb="3"
      />
      <Input
        color="black"
        variant="filled"
        type="password"
        placeholder="Verified password here..."
        onChange={(e) => setPasswordVerify(e.target.value)}
        autoComplete="off"
        required
        value={passwordVerify}
        mb="3"
      />
      <Button width="24" colorScheme="pink" type="submit" mb="3">
        Register
      </Button>
    </form>
  );
}

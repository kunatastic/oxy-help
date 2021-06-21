import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import { BiHide, BiShow } from "react-icons/bi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
      <InputGroup size="lg">
        <Input
          variant="filled"
          type="email"
          placeholder="Enter the Email here..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          autoComplete="off"
          mb="3"
        />
      </InputGroup>

      <InputGroup size="lg">
        <Input
          variant="filled"
          type={show ? "text" : "password"}
          placeholder="Enter the password here..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          autoComplete="off"
          mb="3"
        />
        <InputRightElement width="4.5rem">
          <Button size="sm" onClick={handleClick}>
            {show ? <BiHide color="black" /> : <BiShow color="black" />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button width="24" colorScheme="pink" type="submit" mb="3">
        Log in
      </Button>
    </form>
  );
}

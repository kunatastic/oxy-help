import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";

export default function RegisterForm() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
            {show ? <BiHide /> : <BiShow />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <InputGroup size="lg">
        <Input
          variant="filled"
          type={show ? "text" : "password"}
          placeholder="Confirm password here..."
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
          required
          autoComplete="off"
          mb="3"
        />
        <InputRightElement width="4.5rem">
          <Button size="sm" onClick={handleClick}>
            {show ? <BiHide /> : <BiShow />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button width="24" colorScheme="pink" type="submit" mb="3">
        Register
      </Button>
    </form>
  );
}

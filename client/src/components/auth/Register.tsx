import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const logininfo = useContext(AuthContext);
  const history = useHistory();

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // while (true) {
    //   console.log("REIGISTezr");
    // }

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

      await logininfo?.getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Register a new Account here...</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Enter the Email here..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter the password here..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Verified password here..."
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>

      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/login">login</Link>
      </button>
    </>
  );
}

import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
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

      await logininfo?.getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Login Account here...</h1>
      <form onSubmit={login}>
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
        <button type="submit">Login</button>
      </form>

      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </>
  );
}

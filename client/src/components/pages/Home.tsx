import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>HOME PATH OP</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </>
  );
}

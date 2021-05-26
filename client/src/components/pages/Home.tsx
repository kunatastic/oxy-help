import React from "react";
import { Link } from "react-router-dom";
import HomeNav from "../Layouts/Home/HomeNav";

export default function Home() {
  return (
    <>
      <HomeNav />
      <button>
        <Link to="/login">Login</Link>
      </button>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </>
  );
}

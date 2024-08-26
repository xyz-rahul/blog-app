import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"about-us"}>About Us</Link>
      </ul>
      <ul>
        <Link to={"new-post"}>New Post</Link>
      </ul>
    </nav>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";

export default function Navbar() {
  const { user, signOut } = useContext(AuthenticationContext);
  return (
    <nav>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"dashboard"}>Dashboard</Link>
        <Link to={"about-us"}>About Us</Link>
      </ul>
      <ul>
        <Link to={"new-post"}>New Post</Link>
        {user ? (
          <>
            <Link to={"profile"}>Profile</Link>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <Link to={"login"}>Login</Link>
        )}
      </ul>
    </nav>
  );
}

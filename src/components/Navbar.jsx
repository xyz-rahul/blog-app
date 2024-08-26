import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";

export default function Navbar() {
  const { user, signOut } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"dashboard"}>Dashboard</Link>
          <Link to={"about-us"}>About Us</Link>
        </ul>
      </div>

      <div>
        <ul>
          <Link to={"new-post"}>New Post</Link>
          {user && <Link to={"profile"}>Profile</Link>}
        </ul>
        <div>
          {!user && <button onClick={() => navigate("/login")}>Login</button>}
          {user && <button onClick={signOut}>Sign Out</button>}
        </div>
      </div>
    </nav>
  );
}

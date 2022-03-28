import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ user, logout }) {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="items">
        <NavLink className="links" to="/">
          Home
        </NavLink>
        {user && (
          <NavLink className="links" to="/posts">
            posts
          </NavLink>
        )}
        <Link className="btn" to="/login">
          {user ? <span onClick={() => logout()}>Logout</span> : "Login"}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

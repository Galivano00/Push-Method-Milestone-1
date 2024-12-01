import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">🎬 Netflify</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/add-movie">Add Movie</Link></li>
    </ul>
  </nav>
);

export default Navbar;
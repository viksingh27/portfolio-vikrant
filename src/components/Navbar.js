import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="career" smooth={true} duration={500}>
              Career
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

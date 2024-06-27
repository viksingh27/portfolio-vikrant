// import React from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar">
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <Link to="home" smooth={true} duration={500}>
//               Home
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="career" smooth={true} duration={500}>
//               Career
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="skills" smooth={true} duration={500}>
//               Skills
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="resume" smooth={true} duration={500}>
//               Resume
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = ["navbar"];
  if (scrollPosition > 20) {
    // Adjust the scroll threshold as needed
    navbarClasses.push("scrolled");
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={navbarClasses.join(" ")}>
        <div className="navbar-container">
          <div className={`navbar-logo ${isOpen ? "show" : ""}`}>
            Vikrant Singh Chauhan
          </div>
          <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
            <li className="navbar-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="career"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Career
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="resume"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                Resume
              </Link>
            </li>
          </ul>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

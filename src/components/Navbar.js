import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bucketName, setBucketName] = useState("vikrant-resume");
  const [keyName, setKeyName] = useState("Resume_Vikrant_Singh (1).pdf");
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

  const handleLinkClickResume = () => {
    setIsOpen(false);

    const downloadUrl =
      "https://resume-vikrant.s3.ap-south-1.amazonaws.com/Resume_Vikrant_Singh+(1).pdf";
    const fileName = "Resume_Vikrant_Singh.pdf";

    // Open a new window
    const newWindow = window.open(downloadUrl, fileName);

    // Check if new window is blocked
    if (newWindow) {
      newWindow.onload = () => {
        // Create a link element in the new window
        const link = newWindow.document.createElement("a");
        link.href = downloadUrl;
        link.download = fileName;

        // Append the link to the body
        newWindow.document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Clean up: remove the link from the body
        newWindow.document.body.removeChild(link);
      };
    }
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
                onClick={handleLinkClickResume}
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

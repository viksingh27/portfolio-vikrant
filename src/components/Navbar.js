// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState({
    position: 'sticky',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px 20px',
    transition: 'background-color 0.3s ease, padding 0.3s ease'
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavbarStyle({
          position: 'fixed',
          top: 0,
          backgroundColor: '#252734',
          padding: '8px 20px'
        });
      } else {
        setNavbarStyle({
          position: 'sticky',
          top: 0,
          backgroundColor: '#25273407',
          padding: '10px 20px'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="navbar-brand">
        Vikrant
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#career">Career</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://cdn.pixabay.com/photo/2023/09/22/15/45/panda-8269336_640.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="contact-us" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

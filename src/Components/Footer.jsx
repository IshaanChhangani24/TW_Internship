import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Using react-icons for social media icons

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src="https://cdn.pixabay.com/photo/2023/09/22/15/45/panda-8269336_640.png" alt="Logo" className="footer-logo" />
        <p>© 2024 My Project. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

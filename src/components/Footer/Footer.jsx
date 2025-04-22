import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Nithish. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/nithishrayson" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/nithish-kumar-srinivasan" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" />
          </a>
          <a href="mailto:nithishrayson2004@gmail.com">
            <img src="gmail.png" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

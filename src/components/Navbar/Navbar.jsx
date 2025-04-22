import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo" onClick={() => {
          document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          closeMenu();
        }}>
          <span>N</span>ithish
        </h1>

        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

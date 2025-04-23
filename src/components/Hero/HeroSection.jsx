import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            src="nithis.jpg"
            alt="Nithish Profile"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Nithish Kumar Srinivasan</span>
          </h1>
          <p className="hero-subtitle">
            A passionate developer crafting impactful solutions through clean, efficient code.
          </p>
          <a href="#contact" className="hero-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

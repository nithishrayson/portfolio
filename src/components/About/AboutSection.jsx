import React from "react";
import './AboutSection.css'; // External CSS file// Import your image here

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>I am Nithish, a full-stack developer with experience in building dynamic web and mobile applications. I enjoy turning ideas into real-world solutions through clean code and scalable systems. With a focus on performance, usability, and simplicity, I love solving challenges and continuously learning new technologies to grow as a developer. Beyond coding, I’m passionate about crafting user-friendly interfaces and collaborating with cross-functional teams to bring impactful products to life. I believe in writing maintainable code, staying curious, and building tech that makes a difference.
            </p>
          </div>
          <div className="about-image">
            <img src= "/nithishkumar.jpeg" alt="Nithish" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

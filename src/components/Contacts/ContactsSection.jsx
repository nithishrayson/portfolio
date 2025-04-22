import React from "react";
import './ContactsSection.css';

function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
          Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
        </p>
        <div className="contact-buttons">
          <a href="mailto:nithishrayson2004@gmail.com" className="contact-btn">Email Me</a>
          <a href="https://www.linkedin.com/in/nithish-kumar-srinivasan" target="_blank" rel="noopener noreferrer" className="contact-btn outlined">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

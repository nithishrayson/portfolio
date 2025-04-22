import React from "react";
import './ProjectsSection.css';

const projects = [
  {
    title: "Mangai - Women Safety App",
    description: "Mangai is the woman safety application that helps women feel safer in their daily lives by providing real-time alerts and location tracking. ",
  },
  {
    title: "TalkPal - Chat App",
    description: "A real-time chat app with Firebase authentication and messaging features.",
  },
  {
    title: "Q-Connect - Secure Messaging",
    description: "A secure chat app with post-quantum cryptography and quantum key distribution simulations.",
  }
];

function ProjectsSection() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

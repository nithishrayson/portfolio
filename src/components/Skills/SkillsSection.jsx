import React from "react";
import "./SkillsSection.css";

function SkillsSection() {
  const skills = [
    { name: "React", img: "/react.svg" },
    { name: "Node.js", img: "/node.svg" },
    { name: "Flutter", img: "/flutter.svg" },
    { name: "Machine Learning", img: "/machine.svg" },
    { name: "Firebase", img: "/firebase.svg" },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.img} alt={skill.name} className="skill-img" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

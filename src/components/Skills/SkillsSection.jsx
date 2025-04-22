import React, { useEffect, useState } from "react";
import './SkillsSection.css';
import { FaReact, FaNodeJs, FaAndroid, FaBrain, FaFire } from "react-icons/fa";

function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "Node.js", level: 90, icon: <FaNodeJs /> },
    { name: "Flutter", level: 95, icon: <FaAndroid /> },
    { name: "Machine Learning", level: 85, icon: <FaBrain /> },
    { name: "Firebase", level: 95, icon: <FaFire /> },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="circle-skills">
          {skills.map((skill, index) => (
            <div key={index} className="circle-skill">
              <div className="circle-wrapper">
                <svg className="progress-ring" width="120" height="120">
                  <circle
                    className="bg"
                    cx="60"
                    cy="60"
                    r="50"
                  />
                  <circle
                    className="progress"
                    cx="60"
                    cy="60"
                    r="50"
                    style={{
                      strokeDashoffset: isVisible ? 314 - (314 * skill.level) / 100 : 314,
                    }}
                  />
                </svg>
                <div className="icon">{skill.icon}</div>
              </div>
              <p className="skill-label">{skill.name}</p>
              <span className="percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

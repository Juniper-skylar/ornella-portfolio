import React from "react";
import "../styles.css";

const Projects = () => {
  const projects = [
    {
      title: "Air Nova",
      description:
        "A modern flight booking platform providing users with a seamless way to explore destinations and manage reservations efficiently.",
      icon: "✈️",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Todo App",
      description:
        "An interactive MERN stack task management app allowing users to add, edit, and track their daily activities easily.",
      icon: "📝",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Mindwell",
      description:
        "A mental wellness web platform promoting mindfulness through guided exercises, journaling, and self-assessment tools.",
      icon: "🧠",
      tech: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      title: "Inventory Management System",
      description:
        "A robust tool for managing stock, orders, and suppliers with a clean dashboard and analytics.",
      icon: "📦",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Digital Portfolio Management System",
      description:
        "A web app for managing and showcasing professional portfolios with built-in analytics.",
      icon: "💼",
      tech: ["React", "Bootstrap", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title text-gradient">Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="project-card fade-in">
                <div className="project-icon">{project.icon}</div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

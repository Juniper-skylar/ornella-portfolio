 import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Projects from "./components/Projects";
import aboutImage from "./assets/imagen.jpeg";
import "./styles.css";

const App = () => {
  // ===== Rotating Skills =====
  const skills = [
    "Backend Development",
    "Frontend Development",
    "Mobile Application Development",
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ===== HOME SECTION ===== */}
   {/* ===== HERO SECTION ===== */}
{/* ===== HERO SECTION ===== */}
<section
  id="hero"
  className="hero-section d-flex align-items-center justify-content-center text-center"
  style={{
    minHeight: "100vh",
    color: "#222",
    padding: "80px 20px",
    backgroundColor: "LavenderBlush",
  }}
>
  <div className="container">
    <h2 className="text-muted mb-2 fs-5">Hi There 👋,</h2>
    <h1 className="fw-bold display-5 mb-3">
      I'm <span className="text-primary">Uwase Ornella</span>
    </h1>

    {/* Animated skill text */}
    <h3 className="hero-skill-text mb-4">
      I am into{" "}
      <span className="changing-skill">{skills[currentSkill]}</span>
    </h3>

    {/* Buttons */}
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mt-4">
      {/* Learn More Button */}
      <a href="#skills" className="hero-btn learn-more-btn">
        Learn More <span className="arrow-down">↓</span>
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn github-btn"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="me-2"
          style={{ width: "22px" }}
        />
        GitHub
      </a>
    </div>
  </div>
</section>
      {/* ===== ABOUT SECTION ===== */}
{/* ===== ABOUT SECTION ===== */}
<section
  id="about"
  className="py-5 bg-light text-dark text-center d-flex flex-column align-items-center"
>
  <div className="container">
    <h2 className="fw-bold mb-4">About Me</h2>
    <div className="row justify-content-center align-items-center">
      <div className="col-md-4 mb-4 mb-md-0">
        <img
          src="/src/assets/imagen.jpeg"
          alt="About Me"
          className="img-fluid rounded-4 shadow-lg"
          style={{ maxHeight: "320px", objectFit: "cover" }}
        />
      </div>
      <div className="col-md-6 text-start">
        <p
          style={{
            lineHeight: "1.8",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          I am a passionate web developer who loves creating clean, functional,
          and visually appealing user experiences. My goal is to craft digital
          products that are not only beautiful but also meaningful and
          efficient. I enjoy learning new technologies and continuously improving
          my skills.
        </p>

        {/* Resume Button */}
        <div className="mt-4">
          <a
            href="/Uwase_Ornella_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <i className="bi bi-file-earmark-person-fill me-2"></i>
            View Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="section-content skills-section">
        <div className="container">
          <h2 className="section-title text-gradient">My Skills</h2>
          <div className="row justify-content-center mt-4">
            {[
  { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
   { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
].map((skill) => (
              <div key={skill.name} className="col-lg-2 col-md-3 col-6 mb-4 d-flex justify-content-center">
                <div className="skill-card">
                  <img src={skill.logo} alt={skill.name} className="skill-logo mb-2" />
                  <p>{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== PROJECTS SECTION ===== */}
{/* ===== PROJECTS SECTION ===== */}
<section id="projects" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container text-center">
    <h2 className="fw-bold mb-5 text-gradient">My Projects</h2>
    <div className="row justify-content-center g-4">
      {[
        {
          name: "Air Nova",
          description: "A sleek airline booking platform built for easy travel planning and modern UI experience.",
          tech: ["React", "Node.js", "MongoDB", "Bootstrap"],
        },
        {
          name: "Todo App",
          description: "Full-featured MERN Todo App for task tracking with authentication and cloud sync.",
          tech: ["React", "Express", "MongoDB", "Vite"],
        },
        {
          name: "Mindwell",
          description: "A self-care app promoting mindfulness and mental health awareness with elegant UI.",
          tech: ["React", "Firebase", "Tailwind CSS"],
        },
        {
          name: "Inventory Management System",
          description: "Comprehensive web app to manage stock, track items, and generate reports efficiently.",
          tech: ["React", "Node.js", "MySQL", "Bootstrap"],
        },
        {
          name: "Digital Portfolio System",
          description: "A digital platform for managing and showcasing creative work and portfolios seamlessly.",
          tech: ["React", "Vite", "GitHub", "Tailwind CSS"],
        },
      ].map((project, i) => (
        <div className="col-sm-10 col-md-6 col-lg-4" key={i}>
          <div
            className="project-card-modern p-4 h-100 text-start"
            style={{
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.7)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
            }}
          >
            <h5 className="fw-bold mb-2 text-primary">{project.name}</h5>
            <p className="text-muted small">{project.description}</p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="badge tech-badge rounded-pill"
                  style={{
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    color: "#fff",
                    padding: "6px 12px",
                    fontSize: "0.8rem",
                    letterSpacing: "0.3px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

     {/* ===== SKILLS SECTION ===== */}
<section id="skills" className="section-content skills-section">
  <div className="container">
    <h2 className="section-title">My Skills And Abilities</h2>
    <div className="row justify-content-center mt-4">
      {/* ===== Skill Cards ===== */}
      {[
  { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
].map((skill) => (
        <div key={skill.name} className="col-lg-2 col-md-3 col-6 mb-4 d-flex justify-content-center">
          <div className="skill-card">
            <img src={skill.logo} alt={skill.name} className="skill-logo mb-2" />
            <p>{skill.name}</p>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section-content contact-section" style={{ backgroundColor:"LavenderBlush"}}>
        <div className="container text-center">
          <h2 className="section-title text-gradient">Contact Me</h2>
=======
<Projects />

      {/* ===== CONTACT SECTION ===== */}
<section id="contact" className="section-content contact-section" style={{ backgroundColor: "LavenderBlush"}}>
  <div className="container text-center">
    <h2 className="section-title">Contact Me</h2>
    <p className="contact-intro mt-3">
      I’d love to connect with you! You can reach me through the following platforms:
    </p>


          <div className="d-flex flex-wrap justify-content-center align-items-center mt-4 gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/ornella_lune"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
              />
              <p>@ornella_lune</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/250729598007"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
              <p>+250 729 598 007</p>
            </a>

            {/* Email */}
            <a href="mailto:ornellaigiranezauwase@gmail.com" className="contact-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Email"
              />
              <p>ornellaigiranezauwase@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">

        <p>
          © {new Date().getFullYear()}{" "}
          
            Uwase Ornella — All Rights Reserved
          
        </p>

        <p>© {new Date().getFullYear()} <a href="https://abimana-yves.netlify.app/" className="text-decoration-none text-white">Uwase Ornella — All Rights Reserved</a></p>

      </footer>

      <BackToTop />
    </>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
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
<section id="home" className="hero-section" style={{ backgroundColor: "beige" }}>
  <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
    <h2 className="intro-text">Hi There,</h2>
    <h1 className="main-name">I'm <span className="highlighted">Uwase Ornella</span></h1>
    <h3 className="changing-text">I am into <span className="changing-skill">{skills[currentSkill]}</span></h3>

    {/* ===== BUTTONS ===== */}
    <div className="mt-4 d-flex gap-3 justify-content-center">
  {/* Learn More Button with Modern Arrow */}
  <a href="#skills" className="hero-btn d-flex align-items-center gap-2">
    Learn More
    <span style={{ fontSize: "1.2rem" }}>⤓</span> {/* Modern downward arrow */}
  </a>

  {/* GitHub Button with Logo */}
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-btn d-flex align-items-center gap-2"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      style={{ width: "20px", filter: "invert(100%)" }} // White logo
    />
    GitHub
  </a>
</div>

  </div>
</section>


      {/* ===== ABOUT SECTION ===== */}
<section id="about" className="about-section d-flex flex-wrap align-items-center justify-content-center">
  {/* About Image */}
  <div className="about-image-container">
    <img
      src={aboutImage}  // <-- replace with your actual image path
      alt="Uwase Ornella"
      className="about-image"
    />
  </div>

  {/* About Text */}
  <div className="about-text-container">
    <h2 className="section-title">About Me</h2>
    <p>
      I am a passionate web developer skilled in creating modern, responsive, and interactive web applications. I focus on clean design, accessibility, and intuitive user experiences.
    </p>
    <div className="contact-info">
      <p>Phone: +250 729 598 007</p>
      <p>Place: Kigali, Rwanda</p>
    </div>
  </div>
</section>



     {/* ===== SKILLS SECTION ===== */}
<section id="skills" className="section-content skills-section">
  <div className="container">
    <h2 className="section-title text-gradient">My Skills</h2>
    <div className="row justify-content-center mt-4">
      {/* ===== Skill Cards ===== */}
      {[
        { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vue JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },  // <-- Updated
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
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
<section id="contact" className="section-content contact-section">
  <div className="container text-center">
    <h2 className="section-title text-gradient">Contact Me</h2>
    <p className="contact-intro mt-3">
      I’d love to connect with you! You can reach me through the following platforms:
    </p>

    <div className="d-flex justify-content-center flex-wrap mt-4 gap-5">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/ornella_lune/"
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
        <p>© {new Date().getFullYear()} <a href="https://abimana-yves.netlify.app/" className="text-decoration-none text-white">Uwase Ornella — All Rights Reserved</a></p>
      </footer>

      <BackToTop />
    </>
  );
};

export default App;

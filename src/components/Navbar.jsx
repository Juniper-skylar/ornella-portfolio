import React, { useState, useEffect } from "react";
// Make sure you have styling for navbar

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    // Update active link based on scroll position
    const sections = ["hero", "about", "skills", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const top = element.offsetTop - 80;
        const bottom = top + element.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveLink(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          Uwase Ornella
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            {["hero", "about", "skills", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${
                    activeLink === section ? "active-link" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

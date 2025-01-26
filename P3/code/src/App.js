import React, { useEffect } from "react";
import "./App.css";
import Typed from "typed.js";

function App() {
  const myMenuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  useEffect(() => {
    const typingEffect = new Typed(".typedText", {
      strings: ["Student", "QA Engineer", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Cleanup function to destroy the Typed instance
    return () => {
      typingEffect.destroy();
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="App">
      <div className="container">
        <nav id="header">
          <div className="nav-logo">
            <p className="nav-name">Sushma Kambam</p>
            <span>.</span>
          </div>
          <div className="nav-menu" id="myNavMenu">
            <ul className="nav_menu_list">
              <li className="nav_list">
                <a href="#home" className="nav-link active-link">Home</a>
                <div className="circle"></div>
              </li>
              <li className="nav_list">
                <a href="#about" className="nav-link">About</a>
                <div className="circle"></div>
              </li>
              <li className="nav_list">
                <a href="#projects" className="nav-link">Projects</a>
                <div className="circle"></div>
              </li>
              <li className="nav_list">
                <a href="#contact" className="nav-link">Contact</a>
                <div className="circle"></div>
              </li>
            </ul>
          </div>
          <div className="nav-button">
            <a
              href="https://drive.google.com/file/d/1JRz3pR_QGrdZ6lxGO-2IrINt_GDq2cMd/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                Download CV <i className="uil uil-file-alt"></i>
              </button>
            </a>
          </div>
          <div className="nav-menu-btn">
            <i className="uil uil-bars" onClick={myMenuFunction}></i>
          </div>
        </nav>

        <main className="wrapper">
          <section className="featured-box" id="home">
            <div className="featured-text">
              <div className="featured-text-card">
                <span>Sushma</span>
              </div>
              <div className="featured-name">
                <p>
                  I'm <span className="typedText"></span>
                </p>
              </div>
              <div className="featured-text-info">
                <p>
                  Experienced frontend developer with a passion for creating
                  visually stunning and user-friendly websites.
                </p>
              </div>
              <div className="nav-button">
                <a
                  href="https://drive.google.com/file/d/1JRz3pR_QGrdZ6lxGO-2IrINt_GDq2cMd/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">
                    Download CV <i className="uil uil-file-alt"></i>
                  </button>
                </a>
              </div>
              <div className="social_icons">
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <div className="icon">
                    <i className="uil uil-instagram"></i>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/kambam-sushma/" target="_blank" rel="noopener noreferrer">
                  <div className="icon">
                    <i className="uil uil-linkedin-alt"></i>
                  </div>
                </a>
                <a href="https://github.com/SushmaKambam" target="_blank" rel="noopener noreferrer">
                  <div className="icon">
                    <i className="uil uil-github-alt"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="scroll-icon-box">
              <a href="#about" className="scroll-btn">
                <i className="uil uil-mouse-alt"></i>
                <p>Scroll Down</p>
              </a>
            </div>
          </section>

          <section className="section" id="about">
            <div className="top-header">
              <h1>About Me</h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="about-info">
                  <h3>My introduction</h3>
                  <p>
                    I am a skilled Software Developer and QA Specialist with 1+
                    years of experience in testing, automation, and Agile
                    practices. Currently pursuing a Postgraduate Diploma in
                    Computer Software and Database Development at Loyalist
                    College, Toronto, I hold ISTQB and Oracle SE8 Java
                    certifications. Passionate about delivering high-quality
                    solutions and applying innovative technologies.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Frontend</h3>
                  </div>
                  <div className="skills-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Version Control (Git)</span>
                    <span>JavaScript</span>
                  </div>
                </div>
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Backend</h3>
                  </div>
                  <div className="skills-list">
                    <span>PHP</span>
                    <span>JAVA</span>
                    <span>Python</span>
                    <span>C++</span>
                  </div>
                </div>
                <div className="skills-box">
                  <div className="skills-header">
                    <h3>Database</h3>
                  </div>
                  <div className="skills-list">
                    <span>MySQL</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="projects">
            <div className="top-header">
              <h1>Projects</h1>
            </div>
            <div className="project-container">
              <div className="project-box">
                <i className="uil uil-file-alt"></i>
                <h3>Inventory Management System</h3>
                <label>
                  Developed a Java-based Inventory Management System to manage
                  products, track inventory, and process sales. The system
                  includes features for adding, updating, and selling products
                  with detailed inventory and sales tracking.
                </label>
              </div>
              <div className="project-box">
                <i className="uil uil-file-alt"></i>
                <h3>Movie Search Application</h3>
                <label>
                  Developed a responsive movie search application leveraging
                  JavaScript and OMDB API. This application allows users to
                  search for movies, view detailed information, and watch
                  trailers through YouTube API integration.
                </label>
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="top-header">
              <h1>Get in touch</h1>
              <span>Want to know more? Reach out to me here!</span>
            </div>
            <div className="row">
              <div className="col">
                <div className="contact-info">
                  <h2>
                    Contact <i className="uil uil-corner-right-down"></i>
                  </h2>
                  <p>
                    <i className="uil uil-envelope"></i> Email:
                    kambamsushma02@.com
                  </p>
                  <p>
                    <i className="uil uil-phone"></i> Tel: 647 524 8388
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="form-control">
                  <div className="form-inputs">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Email"
                    />
                  </div>
                  <div className="text-area">
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <div className="form-button">
                    <button className="btn">
                      Send <i className="uil uil-message"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="top-footer">
            <p>Sushma Kambam .</p>
          </div>
          <div className="middle-footer">
            <ul className="footer-menu">
              <li className="footer_menu_list">
                <a href="#home">Home</a>
              </li>
              <li className="footer_menu_list">
                <a href="#about">About</a>
              </li>
              <li className="footer_menu_list">
                <a href="#projects">Projects</a>
              </li>
              <li className="footer_menu_list">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <i className="uil uil-instagram"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <i className="uil uil-linkedin-alt"></i>
              </div>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <i className="uil uil-github-alt"></i>
              </div>
            </a>
          </div>
          <div className="bottom-footer">
            <p>
              Copyright &copy; <a href="#home" style={{ textDecoration: "none" }}>Sushma Kamabm</a> -
              All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

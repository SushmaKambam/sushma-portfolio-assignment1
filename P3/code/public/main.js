import { useEffect } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    // Navigation Bar Toggle
    const myMenuFunction = () => {
      const menuBtn = document.getElementById("myNavMenu");
      if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    };

    // Add Shadow on Scroll
    const headerShadow = () => {
      const navHeader = document.getElementById("header");
      if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    };

    // Typing Effect
    const typingEffect = new Typed(".typedText", {
      strings: ["Student", "QA Engineer", "Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Scroll Reveal
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    // Active Link Highlighting
    const scrollActive = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        }
      });
    };

    // Event Listeners
    document.getElementById("menuBtn").addEventListener("click", myMenuFunction);
    window.addEventListener("scroll", () => {
      headerShadow();
      scrollActive();
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", headerShadow);
      window.removeEventListener("scroll", scrollActive);
      typingEffect.destroy();
    };
  }, []);

  return null; // Integrate this into your components where appropriate
}

export default App;

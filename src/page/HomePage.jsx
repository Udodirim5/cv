import { useState, useEffect } from "react";
import ParticleBackground from "../ui/ParticleBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll listener for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <ParticleBackground />

      <Header
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

      <Projects />

      <About />

      <Contact />

      <Footer />
    </div>
  );
};

export default Portfolio;

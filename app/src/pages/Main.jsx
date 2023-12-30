import React from "react";
import About from "./About";
import Contact from "./Contact";
import { FaHome } from "react-icons/fa";

const Main = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav
        className="fixed top-0 left-0 gap-4 flex bg-[rgba(100,140,190,0.2)] w-full py-2 pl-4"
        style={{
          zIndex: 10,
          backdropFilter: "blur(0.33em)",
          WebkitBackdropFilter: "blur(0.33em)",
        }}
      >
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("about")}
        >
          <FaHome />
        </button>
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </button>
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </button>
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </nav>

      <About scrollToSkills={() => scrollToSection("skills")} />

      <Contact />
    </div>
  );
};

export default Main;

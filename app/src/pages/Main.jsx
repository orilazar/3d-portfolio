import React from "react";
import About from "./About";
import Contact from "./Contact";
import WalkingPets from "../components/common/WalkingPets";
import Expertise from "./Expertise";

const Main = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <WalkingPets />
      <nav
        className="fixed top-0 left-0 gap-4 flex bg-zinc-900 w-full pt-2 pl-4"
        style={{ zIndex: 10 }}
      >
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("about")}
        >
          Home
        </button>
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("expertise")}
        >
          Expertise
        </button>
        <button
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </button>
      </nav>

      <About />

      <Contact />
    </div>
  );
};

export default Main;

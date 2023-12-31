import React, { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import { Navbar, useScrollContext, ScrollProvider } from "../components";
import Movable from "../components/common/Moveable/Movable";

const Main = () => {
  const { sectionRefs, scrollToSection } = useScrollContext();

  return (
    <div>
      <Navbar />
      <Movable sectionRefs={sectionRefs} />
      <About
        scrollToSkills={() => scrollToSection("skills")}
        sectionRefs={sectionRefs}
      />

      <Contact />
    </div>
  );
};

export default Main;

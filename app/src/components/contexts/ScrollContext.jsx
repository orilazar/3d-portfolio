import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";

// Create a context
const ScrollContext = createContext();

// Custom hook to use the ScrollContext
const useScrollContext = () => {
  return useContext(ScrollContext);
};

// Context provider component
const ScrollProvider = ({ children }) => {
  // Number of sections (you can replace this with your actual logic)
  const numberOfSections = 3;

  // Create an array to store refs for each section
  const sectionRefs = Array.from({ length: numberOfSections }).map(() =>
    useRef()
  );

  // State for the active section
  const [activeSection, setActiveSection] = useState(null);

  // State for the position of the div (you can replace this with your actual logic)
  const [divPosition, setDivPosition] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let activeIndex = 0;

    sectionRefs.forEach((sectionRef, index) => {
      if (
        sectionRef.current.offsetTop - window.innerHeight / 2 <=
        scrollPosition
      ) {
        activeIndex = index;
      }
    });

    setActiveSection(activeIndex);
    setDivPosition(scrollPosition);
  };

  // Effect to attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Context value
  const contextValue = {
    activeSection,
    divPosition,
    sectionRefs,
    handleScroll,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollProvider, useScrollContext };

import { FaHome } from "react-icons/fa";

import { useScrollContext } from "../components";

const Navbar = () => {
  const { scrollToSection } = useScrollContext();

  const navbarItems = [
    {
      title: "About",
      sectionName: "about",
      display: <FaHome />,
    },
    {
      title: "Skills",
      sectionName: "skills",
      display: "Skills",
    },
    {
      title: "Experience",
      sectionName: "experience",
      display: "Experience",
    },
    {
      title: "Contact",
      sectionName: "contact",
      display: "Contact",
    },
  ];
  return (
    <nav
      className="fixed top-0 left-0 gap-4 flex w-full py-2 pl-4 z-50"
      style={{
        background: `
        linear-gradient(0deg, rgba(100,140,190,0.04) 0%, rgba(100,140,190,0.2) 100%)`,
        backdropFilter: "blur(0.33em)",
        WebkitBackdropFilter: "blur(0.33em)",
      }}
    >
      {navbarItems.map((item) => (
        <button
          key={item.title}
          className="text-sky-400 font-poppins"
          onClick={() => scrollToSection(item.sectionName)}
        >
          {item.display}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

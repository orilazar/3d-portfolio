import { NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  return location.pathname === "/" ? null : (
    <header className="header">
      <NavLink to="/">
        <NavLink to="/" className="text-blue-400">
          <FaHome className="w-6 h-6" />
        </NavLink>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-slate-500"
          }
        >
          About
        </NavLink>
        {/* <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-slate-500"
          }
        >
          Projects
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-slate-500"
          }
        >
          Contact{" "}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

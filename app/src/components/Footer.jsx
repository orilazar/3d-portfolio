import { Link } from "react-router-dom";

import { socialLinks } from "../constants";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-500" />

      <div className="footer-container">
        <p className="font-semibold text-slate-100">Let's talk!</p>

        <div className="flex gap-3 justify-center items-center">
          {location.pathname !== "/contact" ? (
            <Link
              to="/contact"
              className="btn h-9 rounded-xl items-center flex"
            >
              <p className="font-semibold">Contact</p>
            </Link>
          ) : null}
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-8 h-8 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="text-slate-300 font-bold">Let's talk</p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;

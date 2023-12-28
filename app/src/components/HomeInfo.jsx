import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { FaInfoCircle } from "react-icons/fa";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 font-poppins flex flex-col items-center">
        <div>
          Hi, I'm
          <span className="font-bold mx-2 text-white">Ori</span>
          👋
          <br />A Software Developer
          <br />
        </div>
        <p className="flex items-center text-sky-800 font-poppins font-semibold text-sm mt-1">
          <FaInfoCircle className="mr-1" />
          Drag around to explore
        </p>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center font-poppins">
          Do you want to know more about me? <br /> I'm just a click away.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn font-poppins">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  // if (currentStage === 3) {
  //   return (
  //     <div className="info-box">
  //       <p className="font-medium text-center sm:text-xl">
  //         Led multiple projects to success over the years. <br /> Curious about
  //         the impact?
  //       </p>

  //       <Link to="/projects" className="neo-brutalism-white neo-btn">
  //         Visit my portfolio
  //         <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
  //       </Link>
  //     </div>
  //   );
  // }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center font-poppins">
          Do you want to contact me? <br /> I'm just a click away.
        </p>

        <Link
          to="/contact"
          className="neo-brutalism-white neo-btn font-poppins"
        >
          Let's talk!
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;

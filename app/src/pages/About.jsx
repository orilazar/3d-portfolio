import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Lottie from "lottie-react";
import animationData from "../assets/lottie/arrow_down_animation.json";

import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import Skills from "./Skills";
import LightBall from "../components/common/LightBall/LightBall";
import Cube from "../components/common/Cube/Cube";
import { useRef } from "react";

const About = ({ scrollToSkills, sectionRefs }) => {
  return (
    <section id="about" ref={sectionRefs[0]}>
      <div
        style={{
          background: `
        linear-gradient(0deg, rgba(30,30,30,1) 0%, rgba(30,50,80,1) 100%)`,
        }}
        className="w-full pt-20 h-screen"
      >
        {/* Cubes */}
        <div className="absolute left-[35vw] top-[45vh] w-[50vw]">
          <Cube
            scaleSize={0.3}
            transformExtension="rotate(-15deg)"
            classNameExtension="mt-[4em]"
          />
          <Cube
            scaleSize={0.5}
            transformExtension="rotate(-12deg)"
            classNameExtension="mr-[4em] mt-[6em]"
          />
          <Cube
            scaleSize={0.6}
            transformExtension="rotate(-100deg)"
            classNameExtension="mr-[28em]"
          />
        </div>

        <div className="absolute top-[18vh] left-[18vw] z-1">
          {/* <LightBall /> */}
        </div>

        <div
          className="flex justify-around flex-col h-full z-30"
          style={{ transform: "translateZ(10em)" }}
        >
          <div className="absolute top-[30%] left-[50%] translate-x-[-50%] w-full">
            <h1 className="head-text text-center items-center">
              Hi, I'm
              <span className="blue-gradient_text font-semibold drop-shadow">
                {" Ori Lazarovitch"}
              </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-300">
              <p className="text-slate-300 text-center px-4 font-poppins">
                Software developer specializing in web development, Python and
                C#
              </p>

              <button
                onClick={scrollToSkills}
                className="items-center flex justify-center mt-8"
              >
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: 110, height: 110 }} // Adjust the size as needed
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="max-container">
        <Skills sectionRef={sectionRefs[1]} />

        <section id="experience" className="pt-16" ref={sectionRefs[2]}>
          <h3 className="subhead-text">Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            <p>
              I've worked for different companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[75%] h-[75%] object-contain"
                      />
                    </div>
                  }
                  contentArrowStyle={{
                    borderRightColor: "#ffffff15",
                  }}
                  contentStyle={{
                    borderBottom: "0.5em",
                    borderStyle: "solid",
                    borderRadius: "1em",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                    color: "white",
                    backgroundColor: "#ffffff15",
                  }}
                >
                  <div>
                    <h3 className="text-slate-100 text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-slate-300 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-slate-200 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;

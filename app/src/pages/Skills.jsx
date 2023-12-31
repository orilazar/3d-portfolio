import React from "react";
import { react } from "../assets/icons";
import { code } from "../assets/images";

const Skills = ({ sectionRef }) => {
  const skills = [
    {
      src: react,
      alt: "React",
      firstLine: "Web Development",
      secondLine: "React",
      underlineColor: "#2FD6BA",
      content:
        "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, TS and React.",
    },
    {
      src: code,
      alt: "Software Dev",
      firstLine: "Software",
      secondLine: "Development",
      underlineColor: "#CF26AA",
      content:
        "Proficient in a wide range of technologies and programming languages, keeping up with the latest advancements.",
    },
  ];
  return (
    <section id="skills" ref={sectionRef}>
      <div className="py-16">
        <h3 className="subhead-text">My Skills</h3>
      </div>

      {/* React Cubes */}
      <div className="flex flex-wrap md:flex-no-wrap">
        {skills.map((skill) => (
          <div
            className="flex-shrink-0 w-full lg:w-1/2 mb-4 lg:mb-0"
            key={skill.firstLine}
          >
            {/* Header */}
            <div className="flex items-center">
              <img src={skill.src} alt={skill.alt} className="h-14 mr-4" />
              <div className="text-slate-200 font-semibold font-poppins  text-xl">
                <div className="relative w-fit">
                  {skill.firstLine}
                  <span
                    className="h-[0.16em] w-[100%] absolute bottom-1 left-0"
                    style={{ backgroundColor: skill.underlineColor }}
                  />
                </div>
                {skill.secondLine}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="text-slate-500">{"<h6>"}</p>

              <div className="flex">
                <div className=" bg-slate-500 w-[1px] mx-5" />
                <p className="text-slate-200">{skill.content}</p>
              </div>

              <p className="text-slate-500">{"</h6>"}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

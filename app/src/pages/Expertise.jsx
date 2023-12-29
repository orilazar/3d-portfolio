import React from "react";
import { react } from "../assets/icons";
import { cplusplus, csharp } from "../assets/images";

const Expertise = () => {
  const expertises = [
    {
      src: react,
      alt: "React",
      firstLine: "Frontend Dev",
      secondLine: "React",
      underlineColor: "#2FD6BA",
      content:
        "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    },
    {
      src: cplusplus,
      alt: "Software Dev",
      firstLine: "Software",
      secondLine: "Development",
      underlineColor: "#CF26AA",
      content:
        "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    },
  ];
  return (
    <section id="expertise">
      <div className="py-16">
        <h3 className="subhead-text">My Expertise</h3>
      </div>

      {/* React Cubes */}
      <div className="flex">
        {expertises.map((expertise) => (
          <div>
            {/* Header */}
            <div className="flex items-center">
              <img
                src={expertise.src}
                alt={expertise.alt}
                className="h-14 mr-4"
              />
              <div className="text-slate-200 font-semibold font-poppins  text-xl">
                <div className="relative w-fit">
                  {expertise.firstLine}
                  <span
                    className="h-[0.16em] w-[100%] absolute bottom-1 left-0"
                    style={{ backgroundColor: expertise.underlineColor }}
                  />
                </div>
                {expertise.secondLine}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="text-slate-500">{"<h6>"}</p>

              <div className="flex">
                <div className=" bg-slate-500 w-[1px] mx-5" />
                <p className="text-slate-200">
                  Passionate about UI/UX. Over 4 years of development experience
                  in HTML, CSS, JS, React and NextJS frameworks.
                </p>
              </div>

              <p className="text-slate-500">{"</h6>"}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;

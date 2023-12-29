import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, categories, KnowledgeLevelToString } from "../constants";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import "react-vertical-timeline-component/style.min.css";
import {
  PopoverArrow,
  PopoverBody,
  Box,
  HStack,
  CircularProgress,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import ScrollAppearComponent from "../components/common/ScrollAppearComponent";
import WalkingPets from "../components/common/WalkingPets";

const About = () => {
  return (
    <div>
      <section className="max-container">
        <WalkingPets />
        <h1 className="head-text">
          Hi, I'm
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" Ori Lazarovitch"}
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p className="text-slate-300">
            <strong>Software developer</strong> with{" "}
            <strong>5+ years of experience</strong> in programming.
            <br />
            specializing in web development, Python and C#.
            <br />
            <p className="text-slate-400/90">
              Highly motivated, organized, methodological worker, who’s always
              seeking to learn and improve myself and my environment. Proficient
              in a wide range of technologies and programming languages, keeping
              up with the latest advancements.
            </p>
            <a
              target="_blank"
              href="full_cv.pdf"
              rel="noopener noreferrer"
              className="text-blue-400/80 font-poppins font-semibold text-lg cursor-pointer flex items-baseline w-[fit-content] mt-1"
            >
              View CV
              <FaArrowUpRightFromSquare className="ml-3" fontSize="0.85em" />
            </a>
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <div className="flex items-baseline">
            <div className="flex items-baseline">
              <h3 className="subhead-text">My Skills</h3>
              <p className="ml-4 text-slate-500 flex items-center flex-grow-1 font-poppins">
                Hover for more info <FaInfoCircle className="ml-2" />
              </p>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-8 flex flex-col flex-wrap gap-8">
            {categories.map((category) => (
              <div key={category.name} className="text-slate-300">
                <p className="mb-6 font-semibold font-poppins">
                  {category.name}
                </p>
                <div
                  key={category.name}
                  className="flex flex-wrap gap-3 text-slate-300"
                >
                  {category.items.map((skill, index) => (
                    <ScrollAppearComponent animationTime={index + 1}>
                      <div
                        className="block-container w-20 h-20 mx-3 mb-4"
                        key={skill.name}
                      >
                        <div className="btn-back btn-back-whole-black rounded-xl" />
                        <Popover
                          placement="top"
                          trigger="hover"
                          openDelay={300}
                          closeDelay={200}
                        >
                          <PopoverTrigger>
                            <Box
                              className="btn-front rounded-xl flex justify-center items-center"
                              boxShadow="0.5em 1em 1em #00000044"
                            >
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-2/3 h-2/3 object-contain rounded-xl"
                              />
                            </Box>
                          </PopoverTrigger>
                          <PopoverContent
                            style={{
                              borderRadius: "0.8em",
                              width: "fit-content",
                            }}
                            focusBorderColor="transparent" // Set focus border color to transparent
                            _focus={{ boxShadow: "none" }}
                          >
                            <PopoverArrow />
                            <PopoverBody className="bg-slate-700 border border-transparent rounded-xl p-4">
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems="center"
                              >
                                <Text
                                  fontSize={"small"}
                                  fontWeight="bold"
                                  mb={2}
                                  className="text-slate-100 font-poppins"
                                >
                                  {skill.name}
                                </Text>
                                <HStack>
                                  <Text className="text-slate-300 font-poppins">
                                    {KnowledgeLevelToString(skill.knowledge)}
                                  </Text>

                                  <CircularProgress
                                    color="#222"
                                    trackColor="#11c0d8"
                                    thickness={18}
                                    size={"1.2em"}
                                    value={85 - (skill.knowledge + 1) * 25}
                                  />
                                </HStack>
                              </Box>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </ScrollAppearComponent>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience.</h3>
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
                    borderRightColor: "#ffffff22",
                  }}
                  contentStyle={{
                    borderBottom: "0.5em",
                    borderStyle: "solid",
                    borderRadius: "1em",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                    color: "white",
                    backgroundColor: "#ffffff22",
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
        </div>
      </section>
    </div>
  );
};

export default About;

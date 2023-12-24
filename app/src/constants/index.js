import {
  meta,
  shopify,
  starbucks,
  tesla,
  linkedIn,
  postgresql,
  wpf,
  gitlab,
  solid,
  csharp,
  python,
  cplusplus,
  golang,
  idf,
  rafael,
  adobexd,
  uxui,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

const KnowledgeLevelStrings = ["Beginner", "Advanced", "Expert"];
export const KnowledgeLevelToString = (knowledgeLevel) =>
  KnowledgeLevelStrings[knowledgeLevel];

export const categories = [
  {
    name: "Programming Languages",
    items: [
      { name: "C# + .NET", image: csharp, knowledge: 2 },
      { name: "Python", image: python, knowledge: 1 },
      { name: "C++", image: cplusplus, knowledge: 0 },
      { name: "GoLang", image: golang, knowledge: 0 },
    ],
  },
  {
    name: "Web Development",
    items: [
      { name: "HTML", image: html, knowledge: 2 },
      { name: "CSS", image: css, knowledge: 2 },
      { name: "JavaScript", image: javascript, knowledge: 2 },
      { name: "TypeScript", image: typescript, knowledge: 2 },
      { name: "React", image: react, knowledge: 2 },
      { name: "Tailwind", image: tailwindcss, knowledge: 1 },
      { name: "Node", image: nodejs, knowledge: 1 },
    ],
  },
  {
    name: "DBs",
    items: [
      { name: "MongoDB", image: mongodb, knowledge: 1 },
      { name: "PostgreSQL", image: postgresql, knowledge: 0 },
    ],
  },
  {
    name: "Others",
    items: [
      { name: "Git", image: git, knowledge: 2 },
      { name: "Gitlab", image: gitlab, knowledge: 2 },
      {
        name: "SOLID Design Principles",
        image: solid,
        knowledge: 2,
      },
      { name: "WPF", image: wpf, knowledge: 2 },
      { name: "Adobe Xd", image: adobexd, knowledge: 0 },
      { name: "UI/UX", image: uxui, knowledge: 0 },
    ],
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "IDF",
    icon: idf,
    iconBg: "#788044",
    date: "April 2021 - Present",
    points: [
      "Developing and maintaining a fullstack desktop application, using WPF, Python and MongoDB.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Rafael",
    icon: rafael,
    iconBg: "#a2d2ff",
    date: "August 2019 - April 2021",
    points: [
      "Developing and maintaining a fullstack web application using React.js, Node and PosgreSQL.",
    ],
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    iconUrl: linkedIn,
    link: "https://www.linkedin.com/in/ori-lazarovitch-782561224/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];

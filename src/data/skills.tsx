import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandGit,
  TbBrandMysql,
  TbBrandAws,
  TbBrandAzure,
  TbBrandTailwind,
  TbBrandDocker,
  TbBrandGolang,
  TbBrandPython,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiJest, SiNestjs, SiTrpc, SiExpo, SiKubernetes } from "react-icons/si";

export const skillsInfo: {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
}[] = [
  {
    title: "Programming",
    skills: [
      {
        name: "Typescript",
        icon: <TbBrandTypescript />,
      },
      {
        name: "Javascript",
        icon: <TbBrandJavascript />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "Python",
        icon: <TbBrandPython />,
      },
    ],
  },
  {
    title: "Frameworks/Libraries & Tools",
    skills: [
      {
        name: "React",
        icon: <TbBrandReact />,
      },
      {
        name: "Next.js",
        icon: <TbBrandNextjs />,
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
      },
      {
        name: "Expo",
        icon: <SiExpo />,
      },
      {
        name: "Redux",
        icon: <TbBrandRedux />,
      },
      {
        name: "Jest",
        icon: <SiJest />,
      },
      {
        name: "Tailwind CSS",
        icon: <TbBrandTailwind />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <TbBrandNodejs />,
      },
      {
        name: "Git",
        icon: <TbBrandGit />,
      },
      {
        name: "Nestjs",
        icon: <SiNestjs />,
      },
      {
        name: "MongoDB",
        icon: <TbBrandMongodb />,
      },
      {
        name: "SQL",
        icon: <TbBrandMysql />,
      },
      {
        name: "Azure",
        icon: <TbBrandAzure />,
      },
      {
        name: "AWS",
        icon: <TbBrandAws />,
      },

      {
        name: "trpc",
        icon: <SiTrpc />,
      },
      {
        name: "Docker",
        icon: <TbBrandDocker />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes />,
      },
    ],
  },
  {
    title: "Exploring",
    skills: [
      {
        name: "Go",
        icon: <TbBrandGolang />,
      },
    ],
  },
];

export const softwareSkills = [
"3+ years of experience building scalable and performant web applications.",
"Worked with global teams across India, Germany, and the USA, delivering impactful features and platforms in HR tech, legal tech, CRM systems, and social media domains.",
"Skilled in Next.js, React, React Native, Node.js, FastAPI, PostgreSQL, and Kubernetes with a strong focus on performance optimization, CI/CD and scalable architecture.",
"Love building side projects, reusable dev tools, and contributing to open source when time permits.",
"Practicing Test Driven Development and writing clean, maintainable code.",
];

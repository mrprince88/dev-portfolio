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
} from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { SiJest, SiNestjs, SiTrpc, SiExpo } from "react-icons/si";

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
        name: "Tailwind CSS",
        icon: <TbBrandTailwind />,
      },
      {
        name: "trpc",
        icon: <SiTrpc />,
      },
      {
        name: "Docker",
        icon: <TbBrandDocker />,
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
  "I build high quality websites and mobile applications.",
  "My main focus is on building pixel perfect UIs with intuitive UX.",
  "I build scalable backend services with Node.js and Nestjs.",
  "My preferred tech stack: React, React Native, Next.js, and Tailwind CSS.",
];

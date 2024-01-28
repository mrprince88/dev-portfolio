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
import { FaJava, FaCuttlefish } from "react-icons/fa6";
import { SiJest, SiNestjs, SiTrpc } from "react-icons/si";

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

// type Skill = (typeof skillsInfo)[number]["skills"][number];

// export const IconMap: Record<Skill, JSX.Element> = {
//   Java: <FaJava />,
//   Javascript: <TbBrandJavascript />,
//   Typescript: <TbBrandTypescript />,
//   React: <TbBrandReact />,
//   "React Native": <TbBrandReactNative />,
//   C: <FaCuttlefish />,
//   "Next.js": <TbBrandNextjs />,
//   Redux: <TbBrandRedux />,
//   Jest: <SiJest />,
//   "Node.js": <TbBrandNodejs />,
//   MongoDB: <TbBrandMongodb />,
//   Nestjs: <SiNestjs />,
//   Git: <TbBrandGit />,
//   SQL: <TbBrandMysql />,
//   Azure: <TbBrandAzure />,
//   AWS: <TbBrandAws />,
//   "Tailwind CSS": <TbBrandTailwind />,
//   trpc: <SiTrpc />,
//   Docker: <TbBrandDocker />,
//   Go: <TbBrandGolang />,
// };

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
import { skillsInfo } from "~/data";

type Skill = (typeof skillsInfo)[number]["skills"][number];

export const IconMap: Record<Skill, JSX.Element> = {
  Java: <FaJava />,
  Javascript: <TbBrandJavascript />,
  Typescript: <TbBrandTypescript />,
  React: <TbBrandReact />,
  "React Native": <TbBrandReactNative />,
  C: <FaCuttlefish />,
  "Next.js": <TbBrandNextjs />,
  Redux: <TbBrandRedux />,
  Jest: <SiJest />,
  "Node.js": <TbBrandNodejs />,
  MongoDB: <TbBrandMongodb />,
  Nestjs: <SiNestjs />,
  Git: <TbBrandGit />,
  SQL: <TbBrandMysql />,
  Azure: <TbBrandAzure />,
  AWS: <TbBrandAws />,
  "Tailwind CSS": <TbBrandTailwind />,
  trpc: <SiTrpc />,
  Docker: <TbBrandDocker />,
  Go: <TbBrandGolang />,
};

export default function Icon({ name }: { name: Skill }) {
  return <p className="flex justify-center text-6xl">{IconMap[name]}</p>;
}

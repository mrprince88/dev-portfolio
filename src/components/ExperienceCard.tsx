import Link from "next/link";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

type ExperienceCardProps = {
  experienceData: {
    companyName: string;
    role: string;
    duration: string;
    description: string;
    techStack: string[];
    src: string;
    url: string;
    descBullets?: string[];
  };
};

export default function ExperienceCard({
  experienceData,
}: ExperienceCardProps) {
  return (
    <Card>
      <Link href={experienceData?.url} target="_blank">
        <img
          alt={experienceData?.companyName}
          src={experienceData?.src}
          loading="lazy"
          className="h-[280px] w-full rounded-t-xl bg-white object-contain"
        />
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">{experienceData?.role}</h2>
          <p className="text-xl">{experienceData?.companyName}</p>
          <p className="text-xl">{experienceData?.duration}</p>
        </CardHeader>
        <CardContent className="whitespace-pre-line text-lg">
          {experienceData?.description}
          <ul className="list-disc pl-5">
            {experienceData?.descBullets?.map((desc, index) => (
              <li key={`${experienceData?.companyName}${index}`}>{desc}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="justify-start">
          <div className="text-xl">
            Tech stack:{" "}
            {experienceData?.techStack?.map((stack) => (
              <Badge
                key={`${experienceData?.companyName}${stack}`}
                className="mr-2"
              >
                {stack}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}

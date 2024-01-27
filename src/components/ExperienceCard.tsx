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
  };
};

export default function ExperienceCard({
  experienceData,
}: ExperienceCardProps) {
  return (
    <Card className="bg-background">
      <img
        alt={experienceData?.companyName}
        src={experienceData?.src}
        className="h-[280px] w-full rounded-t-xl bg-white object-contain"
      />
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">{experienceData?.role}</h2>
        <p className="text-xl">{experienceData?.companyName}</p>
        <p className="text-xl">{experienceData?.duration}</p>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line text-xl">
          {experienceData?.description}
        </p>
      </CardContent>
      <CardFooter className="justify-start">
        <div className="text-xl">
          Tech stack:{" "}
          {experienceData?.techStack?.map((stack) => (
            <Badge key={stack} className="mr-2" variant="secondary">
              {stack}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

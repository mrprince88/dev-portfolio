import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "~/components/ui/card";

type educationData = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  collegeLogo: string;
};

export default function EducationCard({
  educationData,
}: {
  educationData: educationData;
}) {
  return (
    <Card className="flex max-[768px]:flex-col">
      <CardHeader>
        <img
          alt="College Logo"
          src={educationData?.collegeLogo}
          className="h-32 w-32"
        />
      </CardHeader>
      <div>
        <CardHeader className="pb-0 text-2xl font-bold">
          {educationData?.schoolName}
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-foreground">
            {educationData?.subHeader}
          </CardDescription>
          <CardDescription className="text-lg text-foreground">
            {educationData?.duration}
          </CardDescription>
          <CardDescription className="text-lg text-foreground">
            {educationData?.desc}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}

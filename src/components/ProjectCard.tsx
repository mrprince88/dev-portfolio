import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import { AnchorButton } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import Link from "next/link";

export default function ProjectCard({
  projectData,
}: {
  projectData: {
    projectName: string;
    projectDesc: string;
    projectImage: string;
    projectUrl: string;
    tags: string[];
    codeLink?: string;
  };
}) {
  return (
    <Card className="h-full">
      <Link href={projectData?.projectUrl} target="_blank">
        <CardHeader className="items-center justify-center">
          <img
            alt={projectData?.projectName}
            src={projectData?.projectImage}
            className="w-fill h-96 object-cover"
          />
        </CardHeader>
        <CardTitle>{projectData?.projectName}</CardTitle>
        <CardContent>
          {projectData?.projectDesc}
          <div className="my-5 flex flex-wrap gap-5">
            {projectData?.tags.map((tag) => (
              <Badge key={`${projectData.projectName}${tag}`}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <AnchorButton
            variant="secondary"
            className="mr-5"
            href={projectData?.projectUrl}
          >
            See Live
          </AnchorButton>
          <AnchorButton
            variant={projectData?.codeLink ? "default" : "disabled"}
            href={projectData?.codeLink}
          >
            See Code
          </AnchorButton>
        </CardFooter>
      </Link>
    </Card>
  );
}

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export default function ProjectCard() {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardHeader className="items-center justify-center">
          <img
            alt="Bücherbüchse"
            src="/assets/images/bookbox.png"
            width={600}
            height={800}
          />
        </CardHeader>
        <CardTitle>Bucherbuesche</CardTitle>
      </CardHeader>
      <CardContent>
        An Instagram-like social media app for book nerds. Built for the German
        market with React Native, React Query and Typescript
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="mr-5">
          See Live
        </Button>
        <Button variant="default">See Code</Button>
      </CardFooter>
    </Card>
  );
}

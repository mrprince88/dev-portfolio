import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

export default function ExperienceCard() {
  return (
    <Card className="bg-background">
      <img
        alt="appleute"
        src="https://www.appleute.de/wp-content/uploads/2021/08/Frame-46.svg"
        width={600}
        height={800}
        className="rounded-t-xl bg-white"
      />
      <CardHeader className="text-center">
        <h2 className="text-2xl font-bold">Software Developer</h2>
        <p className="text-xl">Appleute</p>
        <p className="text-xl">2018 - Present</p>
      </CardHeader>
      <CardContent>
        <p className="text-xl">
          I work on the Ableton Live team, building the next generation of music
          production software. I'm currently working on a project to build a
          cloud-connected web app that allows users to collaborate on music
          projects in real-time.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xl">React, TypeScript, Node.js, Rust</p>
      </CardFooter>
    </Card>
  );
}

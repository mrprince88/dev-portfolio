import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "~/components/ui/card";

export default function EducationCard() {
  return (
    <Card className="flex bg-background">
      <CardHeader>
        <img
          alt="JSS"
          src="https://jssaten.ac.in\/assets/images/logo/jsslogoicon.png"
          className="h-32 w-32"
        />
      </CardHeader>
      <div>
        <CardHeader className="text-2xl font-bold">
          JSS Academy of Technical Education, Noida
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            Bachelor of Technology in Computer Science
          </CardDescription>
          <CardDescription className="text-lg">2018 - 2022</CardDescription>
          <CardDescription className="text-lg"> 8.2 CGPA</CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}

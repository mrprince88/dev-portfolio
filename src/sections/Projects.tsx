import ProjectCard from "~/components/ProjectCard";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { projectsInfo } from "~/data";

export default function Projects() {
  return (
    <section className="mb-20">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mb-8 text-2xl">
        Here are some of the projects I've worked on recently
      </p>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {projectsInfo.map((project) => (
            <CarouselItem className="md:basis-1/2" key={project.projectName}>
              <ProjectCard projectData={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
}

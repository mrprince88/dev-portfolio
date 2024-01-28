import ProjectCard from "~/components/ProjectCard";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { projectsInfo } from "~/data";
import { Fade } from "~/components/ReactReveal";

export default function Projects() {
  return (
    <section className="my-20" id="projects">
      <Fade duration={1000} triggerOnce>
        <h1 className="my-5 text-4xl font-bold">Projects</h1>
        <p className="mb-8 text-2xl uppercase">
          Here are some of the projects I've worked on recently
        </p>
        <Carousel>
          <CarouselPrevious />
          <CarouselContent className="py-5">
            {projectsInfo.map((project) => (
              <CarouselItem className="md:basis-1/2" key={project.projectName}>
                <ProjectCard projectData={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </Fade>
    </section>
  );
}

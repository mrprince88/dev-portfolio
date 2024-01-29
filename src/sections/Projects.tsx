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
      <h1 className="my-5 text-3xl font-bold sm:text-4xl">Projects</h1>
      <p className="mb-8 text-xl uppercase sm:text-2xl">
        {`Here are some of the projects I've worked on recently`}
      </p>
      <Fade duration={1000} direction="up" triggerOnce>
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

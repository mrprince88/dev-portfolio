import Autoplay from "embla-carousel-autoplay";
import ProjectCard from "~/components/ProjectCard";
import {
  CarouselContent,
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function Projects() {
  return (
    <>
      <h1 className="mb-2 mt-2 text-4xl font-bold">Projects</h1>
      <p className="mb-8 text-2xl">
        Here are some of the projects I've worked on recently
      </p>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className="md:basis-1/2">
            <ProjectCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ProjectCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ProjectCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ProjectCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <ProjectCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </>
  );
}

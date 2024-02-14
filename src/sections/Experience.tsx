import ExperienceCard from "~/components/ExperienceCard";
import { Slide } from "~/components/ReactReveal";
import { experienceInfo } from "~/data";

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Experience</h1>
      <Slide duration={1000} direction="left" triggerOnce>
        <div className="grid-row grid grow-0 grid-cols-1 gap-5 sm:auto-rows-fr sm:grid-cols-2 md:grid-cols-3">
          {experienceInfo.map((experience) => (
            <ExperienceCard
              experienceData={experience}
              key={experience.companyName}
            />
          ))}
        </div>
      </Slide>
    </section>
  );
}

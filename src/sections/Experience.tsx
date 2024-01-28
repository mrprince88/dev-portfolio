import ExperienceCard from "~/components/ExperienceCard";
import { Slide } from "~/components/ReactReveal";
import { experienceInfo } from "~/data";

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <Slide duration={1000} direction="left" triggerOnce>
        <h1 className="mb-8 text-4xl font-bold">Experience</h1>
        <div className="grid-row grid grow-0 auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {experienceInfo.map((experience) => (
            <div key={experience.companyName} className="flex flex-grow">
              <ExperienceCard experienceData={experience} />
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}

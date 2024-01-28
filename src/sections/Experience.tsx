import ExperienceCard from "~/components/ExperienceCard";
import { experienceInfo } from "~/data";

export default function Experience() {
  return (
    <section className="py-10" id="experience">
      <h1 className="mb-8 text-4xl font-bold">Experience</h1>
      <div className="flex flex-wrap gap-5">
        {experienceInfo.map((experience) => (
          <div className="flex gap-5 md:flex-1" key={experience.companyName}>
            <ExperienceCard experienceData={experience} />
          </div>
        ))}
      </div>
    </section>
  );
}

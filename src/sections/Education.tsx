import EducationCard from "~/components/EducationCard";
import { educationInfo } from "~/data";
import { Slide } from "~/components/ReactReveal";

export default function Education() {
  return (
    <section className="mb-20" id="education">
      <Slide duration={1000} direction="down" triggerOnce>
        <h1 className="mb-8 mt-2 text-3xl font-bold sm:text-4xl">Education</h1>
        <div className="flex flex-col">
          {educationInfo.map((education) => (
            <EducationCard
              educationData={education}
              key={education.schoolName}
            />
          ))}
        </div>
      </Slide>
    </section>
  );
}

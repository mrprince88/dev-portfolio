import EducationCard from "~/components/EducationCard";
import { educationInfo } from "~/data";
import { Fade } from "~/components/ReactReveal";

export default function Education() {
  return (
    <section className="mb-20" id="education">
      <h1 className="mb-8 mt-2 text-3xl font-bold sm:text-4xl">Education</h1>
      <Fade triggerOnce>
        <div className="flex flex-col">
          {educationInfo.map((education) => (
            <EducationCard
              educationData={education}
              key={education.schoolName}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
}

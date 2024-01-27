import EducationCard from "~/components/EducationCard";
import { educationInfo } from "~/data";

export default function Education() {
  return (
    <section className="mb-20">
      <h1 className="mb-8 mt-2 text-4xl font-bold">Education</h1>
      <div className="flex flex-col">
        {educationInfo.map((education) => (
          <EducationCard educationData={education} key={education.schoolName} />
        ))}
      </div>
    </section>
  );
}

import ExperienceCard from "~/components/ExperienceCard";

export default function Experience() {
  return (
    <section className="py-10" id="experience">
      <h1 className="mb-8 text-4xl font-bold">Experience</h1>
      <div className="flex gap-5">
        <div className="flex basis-1/3">
          <ExperienceCard />
        </div>
        <div className="flex basis-1/3">
          <ExperienceCard />
        </div>
        <div className="flex basis-1/3">
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}

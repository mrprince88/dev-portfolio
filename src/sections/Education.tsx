import EducationCard from "~/components/EducationCard";

export default function Education() {
  return (
    <section className="mb-20">
      <h1 className="mb-8 mt-2 text-4xl font-bold">Education</h1>
      <div className="flex flex-col">
        <EducationCard />
      </div>
    </section>
  );
}

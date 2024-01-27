import DisplayLottie from "~/components/DisplayLottie";
import WorkingMan from "public/assets/lottie/Working.json";
import { skillsInfo } from "~/data";
import Icon from "~/components/Icon";

export default function Skills() {
  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="flex">
        <div className="flex h-[700px] basis-1/3">
          <DisplayLottie animationData={WorkingMan} />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          {skillsInfo.map((skill) => (
            <div className="mb-5 flex flex-col">
              <h2 className="mb-5 text-2xl font-bold">{skill.title}</h2>
              <div className="flex flex-wrap gap-5">
                {skill.skills.map((skill, index) => (
                  <div className="mb-2 mr-2 text-center" key={`skill${index}`}>
                    <Icon name={skill} />
                    <p className="text-bold text-sm text-muted-foreground">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

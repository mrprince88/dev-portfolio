import DisplayLottie from "~/components/DisplayLottie";
import { Slide } from "~/components/ReactReveal";
import WorkingMan from "public/assets/lottie/Working.json";
import { skillsInfo, softwareSkills } from "~/data";

export default function Skills() {
  return (
    <section className="py-20">
      <Slide duration={1000} direction="right" triggerOnce>
        <div className="flex">
          <div className="flex h-[800px] basis-1/2 max-[768px]:hidden">
            <DisplayLottie animationData={WorkingMan} />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="my-5 text-4xl font-bold">What do I do</h1>
            <p className="mb-8 text-2xl">
              I love to learn and build new things. Here are some of the
              technologies I've been working with:
            </p>
            {skillsInfo.map((skill) => (
              <div className="mb-5 flex flex-col">
                {/* <h2 className="mb-5 text-2xl font-bold">{skill.title}</h2> */}
                <div className="flex flex-wrap gap-5">
                  {skill.skills.map((skill) => (
                    <div
                      className="mb-2 mr-2 text-center"
                      key={`skill${skill.name}`}
                    >
                      <p className="flex justify-center text-6xl">
                        {skill.icon}
                      </p>
                      <p className="text-bold text-sm text-muted-foreground">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-center gap-5">
              {softwareSkills.map((skill, index) => (
                <p className="text-bold text-xl" key={`softskills${index}`}>
                  ⚡ {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}

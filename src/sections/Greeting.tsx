import emoji from "react-easy-emoji";
import HelloAnimation from "public/assets/lottie/HelloWorld.json";

import { AnchorButton } from "~/components/ui/button";
import DisplayLottie from "~/components/DisplayLottie";
import { Fade } from "~/components/ReactReveal";
import SocialHandles from "~/components/SocialHandles";

import { greeting } from "~/data";

export default function Greeting() {
  return (
    <Fade duration={1000} triggerOnce>
      <section className="mb-20 flex items-center justify-between px-20 pt-20 max-[600px]:px-2 max-[320px]:flex-col md:flex-row">
        <div className="flex flex-1 flex-col">
          <h1 className="py-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
            {greeting.greeting + " "}
            <span className="text-blue-400">{greeting.name}</span>
            <span className="inline-block animate-wave">{emoji("👋")}</span>
          </h1>
          <p className="text-xl tracking-tight sm:text-3xl sm:leading-[40px]">
            {greeting.description}
          </p>
          <div className="mt-10 flex flex-col gap-5 min-[320px]:flex-row min-[320px]:items-center">
            <AnchorButton
              variant="default"
              size="lg"
              className="uppercase"
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </AnchorButton>
            <AnchorButton
              variant="secondary"
              size="lg"
              className="uppercase"
              target=""
              href="#contact"
            >
              Contact Me
            </AnchorButton>
          </div>
          <SocialHandles />
        </div>
        <div className="flex h-[800px] flex-1 justify-end max-[768px]:hidden">
          <DisplayLottie animationData={HelloAnimation} />
        </div>
      </section>
    </Fade>
  );
}

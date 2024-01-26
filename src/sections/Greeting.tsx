import emoji from "react-easy-emoji";
import HelloAnimation from "public/assets/lottie/HelloWorld.json";

import { Button } from "~/components/ui/button";
import DisplayLottie from "~/components/DisplayLottie";
import Fade from "~/components/FadeContainer";

import { greeting } from "~/data";

export default function Greeting() {
  return (
    <Fade>
      <div className="flex items-center justify-between px-20 pt-20">
        <div className="flex flex-1 flex-col">
          <h1 className="py-4 text-7xl font-bold leading-[1.1] tracking-tight">
            Hi there, I'm <span className="text-blue-400">{greeting.name}</span>{" "}
            <span className="inline-block animate-wave">{emoji("👋")}</span>
          </h1>
          <p className="text-3xl leading-[40px] tracking-tight">
            {greeting.description}
          </p>
          <div className="mt-10 flex items-center space-x-8">
            <Button
              variant="default"
              size="lg"
              className="uppercase"
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
            <Button variant="secondary" size="lg" className="uppercase">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="flex h-[600px] flex-1 justify-end">
          <DisplayLottie animationData={HelloAnimation} />
        </div>
      </div>
    </Fade>
  );
}

"use client";

import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import HelloAnimation from "public/assets/lottie/HelloWorld.json";
import DisplayLottie from "./DisplayLottie";

export default function Greeting() {
  return (
    <Fade direction="down" duration={1000}>
      <div className="flex items-center justify-between px-20 pt-20">
        <div className="flex flex-1 flex-col">
          <h1 className="py-4 text-7xl font-bold leading-[1.1] tracking-tight">
            Hi there, I'm <span className="text-blue-400">Prince</span>{" "}
            <span className="animate-wave inline-block">{emoji("👋")}</span>
          </h1>
          <p className="text-3xl leading-[40px] tracking-tight">
            A full stack software developer having experience building mobile
            and web applications with React, React Native, Node.js, and some
            other cool libraries and frameworks.
          </p>
        </div>
        <div className="flex h-[600px] flex-1 justify-end">
          <DisplayLottie animationData={HelloAnimation} />
        </div>
      </div>
    </Fade>
  );
}

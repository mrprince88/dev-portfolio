"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";
import MeditatingMan from "public/assets/lottie/MeditatingMan.json";
import DisplayLottie from "./DisplayLottie";

export default function Greeting() {
  return (
    <Fade direction="down" duration={1000}>
      <div className="flex h-[600px] items-center justify-between px-40">
        <div className="flex w-1/2 flex-col justify-center">
          <h1 className="py-4 text-6xl font-bold tracking-tight">
            Hi there, I'm <span className="text-blue-400">Prince</span>
          </h1>
          <p className="text-2xl tracking-tight">
            A full stack software developer having experience building mobile
            and web applications with React, React Native, Node.js, and some
            other cool libraries and frameworks.
          </p>
        </div>
        <div className="flex h-full w-1/2 justify-center">
          <DisplayLottie animationData={MeditatingMan} />
        </div>
      </div>
    </Fade>
  );
}

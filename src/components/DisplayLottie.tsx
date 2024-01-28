"use client";

import Lottie from "lottie-react";

export default function DisplayLottie({
  animationData,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  animationData: any;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    animationData: animationData,
  };

  return <Lottie {...defaultOptions} />;
}

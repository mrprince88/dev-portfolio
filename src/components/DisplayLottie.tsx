import React from "react";
import Lottie from "lottie-react";

export default function DisplayLottie({
  animationData,
}: {
  animationData: any;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return <Lottie {...defaultOptions} />;
}

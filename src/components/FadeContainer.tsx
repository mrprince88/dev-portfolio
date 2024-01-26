"use client";

import { Fade } from "react-awesome-reveal";

export default function FadeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fade duration={1000} cascade triggerOnce direction="down">
      {children}
    </Fade>
  );
}

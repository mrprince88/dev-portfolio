import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import localFont from "next/font/local";
import { cn } from "~/lib/utils";

const local = localFont({
  src: "fonts/Agustina.woff",
});

export default function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-background p-6">
      <h2
        className={cn("text-4xl font-semibold tracking-tight", local.className)}
      >
        Prince portfolio
      </h2>
      <div className="mr-6 flex flex-shrink-0 items-center gap-5 text-xl tracking-tight">
        <span>About</span>
        <span>About</span>
        <span>About</span>
        <span>About</span>
        <span>About</span>
        <ThemeToggle />
      </div>
    </nav>
  );
}

"use client";

import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import HeadingTitle from "../components/HeadingTitle";
import Link from "next/link";
import { cn } from "~/lib/utils";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between bg-background px-2 py-4 sm:px-6 md:px-20">
      <Link href="/">
        <HeadingTitle />
      </Link>

      <div className="hidden flex-shrink-0 items-center gap-8 text-xl tracking-tight md:flex">
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Work Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#articles">Articles</Link>
        <Link href="#contact">Contact Me</Link>
        <ThemeToggle />
      </div>

      <div className="md:hidden">
        {!open ? (
          <HamburgerMenuIcon
            onClick={() => setOpen(true)}
            className="mb-2 h-8 w-8 cursor-pointer text-gray-500"
          />
        ) : (
          <Cross1Icon
            className="h-8 w-8 cursor-pointer text-gray-500"
            onClick={() => setOpen(false)}
          />
        )}
        <div
          className={cn(
            "absolute left-0 z-10 mt-8 max-h-0 w-full overflow-hidden bg-background text-xl transition-all duration-500 ease-in-out md:hidden",
            open && "max-h-screen",
          )}
        >
          <div className="mb-5 flex flex-col items-center gap-5">
            <Link href="#skills">Skills</Link>
            <Link href="#experience">Work Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#articles">Articles</Link>
            <Link href="#contact">Contact Me</Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

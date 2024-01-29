import Header from "~/sections/Header";
import Greeting from "~/sections/Greeting";
import Profile from "~/sections/Profile";
import Projects from "~/sections/Projects";
import Education from "~/sections/Education";
import Experience from "~/sections/Experience";
import Skills from "~/sections/Skills";
import Articles from "~/sections/Articles";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="px-5 sm:px-10 md:px-20">
        <Greeting />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Suspense fallback={<div>Loading...</div>}>
          <Articles />
        </Suspense>
        <Profile />
      </main>
    </>
  );
}

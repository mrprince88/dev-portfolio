import Header from "~/sections/Header";
import Greeting from "~/sections/Greeting";
import Profile from "~/sections/Profile";
import Projects from "~/sections/Projects";
import Education from "~/sections/Education";
import Experience from "~/sections/Experience";
import Skills from "~/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-[768px]:px-10 md:px-20">
        <Greeting />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Profile />
      </main>
    </>
  );
}

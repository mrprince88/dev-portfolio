import Header from "~/sections/Header";
import Greeting from "~/sections/Greeting";
import Profile from "~/sections/Profile";
import Projects from "~/sections/Projects";
import Education from "~/sections/Education";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="px-20">
        <Greeting />
        <Education />
        <Projects />
        <Profile />
      </main>
    </>
  );
}

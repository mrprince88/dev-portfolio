import Header from "~/sections/Header";
import Greeting from "~/sections/Greeting";
import Profile from "~/sections/Profile";
import Projects from "~/sections/Projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="px-20">
        <Greeting />
        <Projects />
        <Profile />
      </main>
    </>
  );
}

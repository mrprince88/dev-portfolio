import Header from "~/sections/Header";
import Greeting from "~/sections/Greeting";
import Profile from "~/sections/Profile";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="px-20">
        <Greeting />
        <Profile />
      </main>
    </>
  );
}

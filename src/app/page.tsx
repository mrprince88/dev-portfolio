import Header from "~/sections/Header";
import Greeting from "~/sections/Greeting";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="px-20">
        <Greeting />
      </main>
    </>
  );
}

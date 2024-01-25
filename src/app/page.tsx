import Header from "~/components/Header";
import Greeting from "~/components/Greeting";

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

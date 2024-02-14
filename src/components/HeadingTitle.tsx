import localFont from "next/font/local";
import { cn } from "~/lib/utils";

const local = localFont({
  src: "../../public/assets/fonts/Agustina.woff",
});

export default function HeadingTitle() {
  return (
    <div className="pt-2 text-center text-xl font-semibold tracking-tight sm:text-2xl md:text-4xl">
      <span className="pr-2">&lt;</span>
      <h2 className={cn("mb-4 inline-block", local.className)}>Prince Singh</h2>
      <span className="pl-2">/&gt;</span>
    </div>
  );
}

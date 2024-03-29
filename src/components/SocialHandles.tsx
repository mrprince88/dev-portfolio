import { socialHandles } from "~/data";
import { cn } from "~/lib/utils";
import Link from "next/link";

export default function SocialHandles() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      {socialHandles.map((socialHandle) => (
        <Link
          key={socialHandle.name}
          href={socialHandle.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full p-3 text-2xl text-white",
            socialHandle.className,
          )}
        >
          {socialHandle.Icon}
        </Link>
      ))}
    </div>
  );
}

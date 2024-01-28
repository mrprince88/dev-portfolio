"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-6 w-14 rounded-full bg-input" />;

  return (
    <Switch
      checked={resolvedTheme === "dark"}
      onCheckedChange={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      thumbIcon={
        resolvedTheme === "dark" ? (
          <MoonIcon />
        ) : (
          <SunIcon className="text-yellow-600" />
        )
      }
    />
  );
}

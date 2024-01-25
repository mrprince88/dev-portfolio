"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Switch
      checked={mounted && resolvedTheme === "dark"}
      onCheckedChange={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    />
  );
}

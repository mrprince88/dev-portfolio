"use client";

import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Switch
      checked={resolvedTheme === "dark"}
      onCheckedChange={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    />
  );
}

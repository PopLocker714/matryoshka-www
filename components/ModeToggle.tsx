// "use client";
// import { useTheme } from "next-themes";
// import React from "react";
// import { Button } from "./ui/button";
// import { getCurrentTheme } from "@/lib/getCurrentThemeState";

// export const SwitchThemeButton = () => {
//   const { setTheme } = useTheme();
//   const [theme, setThemeState] = React.useState<"system" | "dark" | "light">(getCurrentTheme());

//   const switchTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//     setThemeState(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <Button className="sticky bottom-0 right-0 z-10" onClick={switchTheme}>
//       switch-theme-button
//     </Button>
//   );
// };

// export default SwitchThemeButton;

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className || ""}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Светлая</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Темная</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>Системная</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

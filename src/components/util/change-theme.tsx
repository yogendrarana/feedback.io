"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="space-x-0"
            aria-label="Change theme"
            name="Change theme"
            onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
            }}
        >
            <SunIcon
                size={20}
                strokeWidth={1.5}
                className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <MoonIcon
                size={20}
                strokeWidth={1.5}
                className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
        </Button>
    );
}
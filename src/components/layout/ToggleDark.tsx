"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Dialog, Switch } from "@headlessui/react";

export default function TogleDark() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === "dark");
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      checked={isDark}
      onChange={toggleDarkMode}
      className={`${
        isDark ? 'bg-orange-600' : 'bg-orange-300'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Dark Mode</span>
      <span
        className={`${
          isDark ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
    
  );
}

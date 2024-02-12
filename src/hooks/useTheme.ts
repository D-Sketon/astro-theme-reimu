import { useLocalStorage, useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "auto";

export default function useTheme(defaultTheme: Theme = "auto") {
  const isMatchDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [value, setValue] = useLocalStorage<Theme>(
    "theme",
    defaultTheme
  );
  const [theme, setTheme] = useState<Theme>(value);

  const colorMode =
    theme === "auto"
      ? value === "auto"
        ? isMatchDark
          ? "dark"
          : "light"
        : value
      : theme;
  useEffect(() => {
    if (value && value !== theme) {
      setTheme(value);
    }
  }, []);

  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = "dark";
    }
    if (colorMode === "light") {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.style.colorScheme = "light";
    }
  }, [colorMode]);

  const setThemeAndStorage = (theme: Theme) => {
    setValue(theme);
    setTheme(theme);
  };

  return {
    colorMode: colorMode, // light or dark
    theme: theme, // auto or light or dark
    setTheme: setThemeAndStorage, // set theme and save to localStorage
  };
}

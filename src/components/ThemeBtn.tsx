import useTheme, { type Theme } from "../hooks/useTheme";
import { useState, useEffect } from "react";
import { IconSunFilled, IconMoonFilled, IconBlur } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { colorMode, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <></>;
  }

  const handleChange = (theme: Theme) => {
    setTheme(theme);
    document.body.dispatchEvent(
      new CustomEvent("theme-set", {
        detail: {
          theme,
        },
      })
    );
  };
  return (
    <span
      style={{
        color: "var(--red-2)",
        opacity: "0.8",
        height: "100%",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {theme === "dark" && (
        <IconMoonFilled size={20} onClick={() => handleChange("auto")} />
      )}
      {theme === "light" && (
        <IconSunFilled size={20} onClick={() => handleChange("dark")} />
      )}
      {theme === "auto" && (
        <IconBlur size={20} onClick={() => handleChange("light")} />
      )}
    </span>
  );
}

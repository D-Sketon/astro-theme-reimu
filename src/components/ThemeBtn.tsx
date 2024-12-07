import useTheme, { type Theme } from "../hooks/useTheme";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
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
        color: "var(--red-1)",
        opacity: "0.8",
        height: "100%",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {theme === "dark" && (
        <FontAwesomeIcon icon={faMoon} scale={20} onClick={() => handleChange("light")} />
      )}
      {theme === "light" && (
        <FontAwesomeIcon icon={faSun} scale={20} onClick={() => handleChange("dark")} />
      )}
      {theme === "auto" && (
        <FontAwesomeIcon icon={faCircleHalfStroke} scale={20} onClick={() => handleChange("light")} />
      )}
    </span>
  );
}

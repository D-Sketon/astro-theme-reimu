import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

import useTheme, { type Theme } from "../../hooks/useTheme";

export default function ThemeToggle({ className }: { className?: string }) {
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

  const handleClick = () => {
    if (theme === "dark") {
      handleChange("light");
    } else if (theme === "light") {
      handleChange("dark");
    } else {
      handleChange("light");
    }
  };

  return (
    <span 
      className={className} 
      onClick={handleClick}
    >
      {theme === "dark" && (
        <FontAwesomeIcon icon={faMoon} scale={20} />
      )}
      {theme === "light" && (
        <FontAwesomeIcon icon={faSun} scale={20} />
      )}
      {theme === "auto" && (
        <FontAwesomeIcon icon={faCircleHalfStroke} scale={20} />
      )}
    </span>
  );
}

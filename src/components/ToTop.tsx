import { IconArrowUp } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

import "../styles/top.stylus";

export default function ToTop({ url }: { url: string }) {
  const [opacity, setOpacity] = useState(0);
  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollHandler = useCallback(() => {
    if (document.documentElement.scrollTop < 10) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  }, []);

  useEffect(() => {
    if (document.documentElement.scrollTop < 10) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className="sidebar-top"
      onClick={handleClick}
      style={{
        opacity: opacity,
      }}
    >
      <img
        src={`${url}/images/taichi.png`}
        height={50}
        width={50}
        alt="backtop"
      />
      <IconArrowUp className="arrow-up" />
    </div>
  );
}

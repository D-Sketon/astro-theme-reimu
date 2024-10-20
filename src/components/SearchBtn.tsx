import { IconSearch } from "@tabler/icons-react";

export default function SearchBtn() {
  function handleSearch() {
    const scrollWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    const overlay = document.createElement("div");
    overlay.className = "popoverlay";
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const popup = document.querySelector(".popup")! as HTMLDivElement;
    popup.classList.add("show");
    document
      .getElementById("reimu-search-input")!
      .querySelector("input")!
      .focus();
    document.querySelector<HTMLElement>("#header-nav")!.style.marginRight =
      scrollWidth + "px";
    document.documentElement.style.marginRight = scrollWidth + "px";
  }
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
      <IconSearch size={20} onClick={handleSearch} />
    </span>
  );
}

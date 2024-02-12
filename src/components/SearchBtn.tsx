import { IconSearch } from "@tabler/icons-react";

export default function SearchBtn() {
  function handleSearch() {
    // Create and append popoverlay div
    const overlay = document.createElement("div");
    overlay.className = "popoverlay";
    document.body.appendChild(overlay);

    // Disable body overflow
    document.body.style.overflow = "hidden";

    // Toggle the popup
    const popup = document.querySelector(".popup")! as HTMLDivElement;
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "block";
      document
        .getElementById("reimu-search-input")!
        .querySelector("input")!
        .focus();
    } else {
      popup.style.display = "none";
    }
  }
  return (
    <span
      style={{
        color: "var(--red-2)",
        opacity: "0.8",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconSearch size={20} onClick={handleSearch} />
    </span>
  );
}

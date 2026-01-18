import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBtn({ className }: { className?: string }) {
  function handleSearch() {
    const scrollWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    document.querySelector("#mask")?.classList.remove("hide");
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
    <span className={className} onClick={handleSearch}>
      <FontAwesomeIcon icon={faSearch} scale={20} />
    </span>
  );
}

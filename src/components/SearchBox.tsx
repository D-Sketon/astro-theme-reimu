import "../styles/search.css";
import Fuse from "fuse.js";
import { useState } from "react";
import { IconSearch, IconCircleXFilled } from "@tabler/icons-react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["data.title", "data.description"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

export default function SearchBox({ searchList }: { searchList: any[] }) {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 5
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = { value: "" } }) {
    const { value } = target;
    setQuery(value);
  }

  function handleClose() {
    const popup = document.querySelector(".popup")! as HTMLDivElement;
    popup.style.display = "none";
    const popoverlayElements = document.querySelectorAll(".popoverlay");
    popoverlayElements.forEach(function (element) {
      element.parentNode?.removeChild(element);
    });
    document.body.style.overflow = "";
  }

  return (
    <>
      <div className="site-search">
        <div className="reimu-popup popup">
          <div className="reimu-search">
            <div className="reimu-search-input" id="reimu-search-input">
              <IconSearch size={20} />
              <input
                type="text"
                value={query}
                onChange={handleOnSearch}
                placeholder="Search"
                className=""
              />
              <IconCircleXFilled color="red" onClick={handleClose} />
            </div>
          </div>
          <div className="reimu-results">
            <div id="reimu-stats">
              {query.length > 1 && (
                <>
                  <p>
                    Found {posts.length}{" "}
                    {posts.length === 1 ? "result" : "results"} for '{query}'
                  </p>
                  <hr />
                </>
              )}
            </div>
            <div id="reimu-hits">
              <ul>
                {posts &&
                  posts.map((post) => (
                    <li className="reimu-hit-item">
                      <a
                        className="reimu-hit-item-link"
                        href={`/blog/${post.slug}`}
                      >
                        {post.data.title}
                      </a>
                      {post.data.description}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <span className="popup-btn-close"></span>
        </div>
      </div>
    </>
  );
}

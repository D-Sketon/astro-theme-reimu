import "../styles/search.stylus";
import Fuse from "fuse.js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["data.title", "data.description"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

export default function SearchBox({
  searchList,
  url,
}: {
  searchList: any[];
  url: string;
}) {
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
    popup.classList.remove("show");
    document.querySelector("#mask")?.classList.add("hide");
    document.body.style.overflow = "";
    document.documentElement.style.marginRight = "";
    document.querySelector<HTMLElement>("#header-nav")!.style.marginRight = "";
  }

  return (
    <>
      <div className="site-search">
        <div className="reimu-popup popup">
          <div className="reimu-search">
            <div className="reimu-search-input" id="reimu-search-input">
              <FontAwesomeIcon icon={faSearch} scale={20} />
              <input
                type="text"
                value={query}
                onChange={handleOnSearch}
                placeholder="Search"
                className=""
              />
              <FontAwesomeIcon
                icon={faTimesCircle}
                scale={20}
                onClick={handleClose}
                className="popup-btn-close"
              />
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
                  posts.map((post, index) => (
                    <li className="reimu-hit-item" key={index}>
                      <a
                        className="reimu-hit-item-link"
                        href={`${url}/blog/${post.slug}`}
                      >
                        {post.data.title}
                      </a>
                      {post.data.description}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <img className="reimu-bg" src={`${url}/images/reimu.png`} />
        </div>
      </div>
    </>
  );
}

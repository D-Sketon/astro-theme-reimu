import "../../styles/search.stylus";
import Fuse from "fuse.js";
import { useState, useEffect, useMemo, useRef } from "react";
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

type SearchItem = {
  id: string;
  data: {
    title: string;
    description: string;
    keywords?: string | string[];
    pubDate?: string;
  };
};

export default function SearchBox({
  searchIndexUrl,
  searchList: initialSearchList = [],
  postUrlPrefix,
  imageUrl,
}: {
  searchIndexUrl: string;
  searchList?: SearchItem[];
  postUrlPrefix: string;
  imageUrl: string;
}) {
  const [searchList, setSearchList] = useState<SearchItem[]>(
    initialSearchList
  );
  const fetchPromiseRef = useRef<Promise<void> | null>(null);
  // User's input
  const [query, setQuery] = useState("");

  const loadIndex = () => {
    if (searchList.length > 0) return;
    if (fetchPromiseRef.current) return;
    fetchPromiseRef.current = window.fetch(searchIndexUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Search index request failed: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setSearchList(data as SearchItem[]);
        }
      })
      .catch(() => {
        fetchPromiseRef.current = null;
      });
  };

  const fuse = useMemo(
    () => new Fuse<SearchItem>(searchList, options),
    [searchList]
  );

  // Set a limit to the posts: 5
  const posts: SearchItem[] = query.length > 1
    ? fuse
        .search(query)
        .map((result) => result.item)
        .slice(0, 5)
    : [];

  function handleOnSearch({ target = { value: "" } }) {
    const { value } = target;
    if (value.length > 1 && searchList.length === 0) {
      loadIndex();
    }
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      loadIndex();
    };
    document.addEventListener("reimu-search-open", handleOpen);
    return () => {
      document.removeEventListener("reimu-search-open", handleOpen);
    };
  }, [searchIndexUrl]);

  return (
    <>
      <div className="site-search">
        <div className="reimu-popup popup">
          <div className="reimu-search">
            <div className="reimu-search-input" id="reimu-search-input">
              <FontAwesomeIcon
                icon={faSearch}
                scale={20}
                className="popup-search-icon"
              />
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
                    {posts.length === 1 ? "result" : "results"} for &apos;
                    {query}&apos;
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
                        href={`${postUrlPrefix}/${post.id}`}
                      >
                        {post.data.title}
                      </a>
                      {post.data.description}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <img className="reimu-bg" src={imageUrl} />
        </div>
      </div>
    </>
  );
}

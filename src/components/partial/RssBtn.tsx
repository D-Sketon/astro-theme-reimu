import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";

export default function RssBtn({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  return (
    <span className={className}>
      <a
        href={`${url}/rss.xml`}
        target="_blank"
        aria-label="RSS"
        style={{ color: "inherit" }}
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faRss} scale={20} />
      </a>
    </span>
  );
}

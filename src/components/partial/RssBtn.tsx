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
    <a
      href={`${url}/rss.xml`}
      target="_blank"
      aria-label="RSS"
      rel="noreferrer"
      className={className}
    >
      <FontAwesomeIcon icon={faRss} scale={20} />
    </a>
  );
}

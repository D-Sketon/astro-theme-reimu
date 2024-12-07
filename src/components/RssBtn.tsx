import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss } from '@fortawesome/free-solid-svg-icons'

export default function RssBtn({ url }: { url: string}) {
  return (
    <span
      style={{
        opacity: "0.8",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <a href={`${url}/rss.xml`} target="_blank" style={{ color: "var(--red-1)" }} aria-label="RSS">
        <FontAwesomeIcon icon={faRss} scale={20} />
      </a>
    </span>
  );
}

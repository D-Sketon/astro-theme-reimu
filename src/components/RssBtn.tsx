import { IconRss } from "@tabler/icons-react";

export default function RssBtn() {
  return (
    <span
      style={{
        opacity: "0.8",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <a href="/rss.xml" target="_blank" style={{ color: "var(--red-2)" }}>
        <IconRss size={20} />
      </a>
    </span>
  );
}

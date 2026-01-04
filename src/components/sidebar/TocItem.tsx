import React from "react";

type Heading = {
  depth: number;
  slug: string;
  text: string;
  children: Heading[];
};

interface TocItemProps {
  item: Heading;
  index?: number;
  key?: string;
}

const TocItem: React.FC<TocItemProps> = ({ item, key }) => {
  const hasChildren = item.children && item.children.length > 0;
  const className = `toc-item toc-level-${item.depth}`;

  return (
    <li className={className} key={key}>
      <a className="toc-link" href={`#${item.slug}`}>
        <span className="toc-text">{item.text}</span>
      </a>
      {hasChildren && (
        <ol className="toc-child">
          {item.children.map((child, childIndex) => (
            <TocItem
              key={`${child.slug}-${childIndex}`}
              item={child}
              index={childIndex}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default TocItem;

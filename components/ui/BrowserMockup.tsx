import type { CSSProperties, ReactNode } from "react";

export default function BrowserMockup({
  url = "monsite.fr",
  children,
  className = "",
  style,
}: {
  url?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`bmock ${className}`} style={style}>
      <div className="bmock-bar">
        <span className="bmock-dot" />
        <span className="bmock-dot" />
        <span className="bmock-dot" />
        <span className="bmock-url">{url}</span>
      </div>
      <div className="bmock-body">{children}</div>
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "dark" | "ghost" | "ghost-light" | "soft";
  size?: "md" | "lg";
  href?: string;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  arrow = false,
  className = "",
  children,
}: ButtonProps) {
  const cls = ["btn", `btn--${variant}`, size === "lg" && "btn--lg", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={cls}>
      {content}
    </button>
  );
}

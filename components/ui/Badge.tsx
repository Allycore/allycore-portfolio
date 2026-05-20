import type { ReactNode } from "react";

export default function Badge({
  variant = "yellow",
  mono = false,
  children,
}: {
  variant?: "yellow" | "dark" | "soft";
  mono?: boolean;
  children: ReactNode;
}) {
  return (
    <span className={`badge badge--${variant}${mono ? " badge--mono" : ""}`}>
      {children}
    </span>
  );
}

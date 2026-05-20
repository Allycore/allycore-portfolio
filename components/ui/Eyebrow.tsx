import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return <span className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</span>;
}

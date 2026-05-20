export default function BarsMark({
  size = "md",
  light = false,
}: {
  size?: "md" | "lg" | "xl";
  light?: boolean;
}) {
  const cls = [
    "bars-mark",
    size === "lg" && "bars-mark--lg",
    size === "xl" && "bars-mark--xl",
    light && "bars-mark--light",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

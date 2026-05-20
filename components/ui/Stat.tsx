import CountUp from "./CountUp";

export default function Stat({
  value,
  suffix,
  label,
  dark = true,
}: {
  value: number;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className={`card ${dark ? "card--dark" : ""}`} style={{ padding: "28px 24px" }}>
      <div
        className="font-display font-bold leading-none"
        style={{
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          letterSpacing: "-0.04em",
          color: dark ? "var(--ac-yellow)" : "var(--ac-ink)",
        }}
      >
        <CountUp value={value} />
        {suffix && (
          <span style={{ fontSize: "0.48em", marginLeft: 4, color: "var(--ac-yellow)" }}>
            {suffix}
          </span>
        )}
      </div>
      <div
        className="mt-2.5 text-[13px] leading-snug"
        style={{ color: dark ? "rgba(246,244,236,0.78)" : "var(--fg-3)" }}
      >
        {label}
      </div>
    </div>
  );
}

export function Ornament({
  variant = "network",
  className = "",
  color = "crimson",
}: {
  variant?: "network" | "topo" | "arc";
  className?: string;
  color?: "crimson" | "ink";
}) {
  const stroke = color === "crimson" ? "#9E1B1B" : "#111111";

  if (variant === "network") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        fill="none"
        className={className}
      >
        <g stroke={stroke} strokeWidth="1.1" opacity="0.5">
          <path d="M40 60 L150 120 L260 40 L360 110" />
          <path d="M150 120 L120 240 L40 300" />
          <path d="M150 120 L260 220 L360 110" />
          <path d="M260 220 L200 340 L340 380" />
          <path d="M120 240 L200 340" />
          <path d="M260 40 L340 380" opacity="0.3" />
        </g>
        <g fill={stroke}>
          <circle cx="40" cy="60" r="4" />
          <circle cx="150" cy="120" r="5" />
          <circle cx="260" cy="40" r="3.5" />
          <circle cx="360" cy="110" r="4.5" />
          <circle cx="120" cy="240" r="4" />
          <circle cx="40" cy="300" r="3.5" />
          <circle cx="260" cy="220" r="5" />
          <circle cx="200" cy="340" r="4" />
          <circle cx="340" cy="380" r="3.5" />
        </g>
      </svg>
    );
  }

  if (variant === "topo") {
    return (
      <svg aria-hidden viewBox="0 0 500 300" fill="none" className={className}>
        <g stroke={stroke} strokeWidth="1" fill="none" opacity="0.55">
          <path d="M10 250 Q 130 180 250 240 T 490 210" />
          <path d="M10 200 Q 140 140 260 190 T 490 160" />
          <path d="M10 150 Q 150 100 260 140 T 490 110" />
          <path d="M10 100 Q 160 60 270 90 T 490 60" />
        </g>
      </svg>
    );
  }

  return (
    <svg aria-hidden viewBox="0 0 300 300" fill="none" className={className}>
      <g stroke={stroke} strokeWidth="1.2" opacity="0.5">
        <circle cx="150" cy="150" r="60" />
        <circle cx="150" cy="150" r="105" />
        <circle cx="150" cy="150" r="145" />
      </g>
    </svg>
  );
}

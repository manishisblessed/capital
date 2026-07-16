import { chartSeries } from "@/lib/palette";
import { cn } from "@/lib/utils";

type Segment = { label: string; value: number };

type Props = {
  segments: Segment[];
  size?: number;
  thickness?: number;
  className?: string;
  centerLabel?: string;
  centerValue?: string;
};

/**
 * Minimal, accessible donut. Uses the Section 9 palette in fixed order.
 * SVG-based so it renders identically in print.
 */
export function DonutChart({
  segments,
  size = 200,
  thickness = 22,
  className,
  centerLabel,
  centerValue,
}: Props) {
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  const radius = size / 2 - thickness / 2;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;
  const arcs = segments.map((seg, i) => {
    const length = (seg.value / total) * circumference;
    const dash = `${length} ${circumference - length}`;
    const rotate = (offset / circumference) * 360;
    offset += length;
    return {
      dash,
      rotate,
      color: chartSeries[i % chartSeries.length],
      key: seg.label,
    };
  });

  return (
    <figure className={cn("flex flex-col items-start gap-6", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={segments.map((s) => `${s.label}: ${s.value}`).join(", ")}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#EFECE7"
          strokeWidth={thickness}
        />
        {arcs.map((arc) => (
          <circle
            key={arc.key}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={arc.color}
            strokeWidth={thickness}
            strokeDasharray={arc.dash}
            transform={`rotate(${arc.rotate - 90} ${size / 2} ${size / 2})`}
          />
        ))}
        {(centerLabel || centerValue) && (
          <g>
            {centerValue && (
              <text
                x={size / 2}
                y={size / 2 - 2}
                textAnchor="middle"
                className="fill-charcoal"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontVariantNumeric: "tabular-nums lining-nums",
                }}
              >
                {centerValue}
              </text>
            )}
            {centerLabel && (
              <text
                x={size / 2}
                y={size / 2 + 18}
                textAnchor="middle"
                className="fill-slate-blue"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {centerLabel}
              </text>
            )}
          </g>
        )}
      </svg>
      <figcaption className="w-full">
        <ul className="space-y-2 text-sm">
          {segments.map((seg, i) => (
            <li key={seg.label} className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-sm shrink-0"
                style={{ background: chartSeries[i % chartSeries.length] }}
                aria-hidden
              />
              <span className="text-charcoal">{seg.label}</span>
              <span className="ml-auto text-slate tabular-nums">{seg.value}</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

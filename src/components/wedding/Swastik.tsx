interface SwastikProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Traditional Hindu Auspicious Swastik (पवित्र स्वास्तिक)
 * - 4 Sacred Bindus (dots) in all 4 quadrants
 * - Right-facing / Dakshinavarti auspicious clockwise arms
 * - No side lines (बिना खड़ी रेखाओं के शुद्ध स्वास्तिक)
 */
export function Swastik({
  className = "w-5 h-5",
  size,
  color = "currentColor",
}: SwastikProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Auspicious Hindu Swastik"
    >
      {/* Main Vertical Bar */}
      <line
        x1="50"
        y1="14"
        x2="50"
        y2="86"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* Main Horizontal Bar */}
      <line
        x1="14"
        y1="50"
        x2="86"
        y2="50"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* 4 Clockwise Arms (दाहिनी ओर मुड़ी 4 भुजाएं) */}
      {/* 1. Top-Right: Top arm turns right */}
      <line
        x1="50"
        y1="14"
        x2="84"
        y2="14"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* 2. Bottom-Right: Right arm turns down */}
      <line
        x1="86"
        y1="50"
        x2="86"
        y2="84"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* 3. Bottom-Left: Bottom arm turns left */}
      <line
        x1="50"
        y1="86"
        x2="16"
        y2="86"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* 4. Top-Left: Left arm turns up */}
      <line
        x1="14"
        y1="50"
        x2="14"
        y2="16"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* 4 Auspicious Bindus (४ पवित्र बिंदियां) */}
      <circle cx="68" cy="32" r="5" fill={color} />
      <circle cx="68" cy="68" r="5" fill={color} />
      <circle cx="32" cy="68" r="5" fill={color} />
      <circle cx="32" cy="32" r="5" fill={color} />
    </svg>
  );
}

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export default function LogoMark({ size = 44, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sig-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Roof left */}
      <line x1="24" y1="90" x2="100" y2="18" stroke="url(#sig-logo-g)" strokeWidth="7.5" strokeLinecap="round" />
      {/* Roof right */}
      <line x1="176" y1="90" x2="100" y2="18" stroke="url(#sig-logo-g)" strokeWidth="7.5" strokeLinecap="round" />

      {/* Chimney */}
      <rect x="117" y="10" width="18" height="30" rx="2" fill="url(#sig-logo-g)" />

      {/* Left wall — L-shape */}
      <polyline
        points="24,90 24,182 64,182"
        stroke="url(#sig-logo-g)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right wall — L-shape */}
      <polyline
        points="176,90 176,182 136,182"
        stroke="url(#sig-logo-g)"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Door frame */}
      <path
        d="M80,148 L80,182 M120,148 L120,182 M80,148 L120,148"
        stroke="url(#sig-logo-g)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Magnifying glass lens */}
      <circle cx="92" cy="112" r="52" stroke="url(#sig-logo-g)" strokeWidth="7.5" fill="rgba(59,130,246,0.10)" />

      {/* 2×2 window grid inside lens */}
      <rect x="64" y="84" width="23" height="23" rx="3.5" fill="url(#sig-logo-g)" />
      <rect x="91" y="84" width="23" height="23" rx="3.5" fill="url(#sig-logo-g)" />
      <rect x="64" y="111" width="23" height="23" rx="3.5" fill="url(#sig-logo-g)" />
      <rect x="91" y="111" width="23" height="23" rx="3.5" fill="url(#sig-logo-g)" />

      {/* Handle */}
      <line x1="134" y1="150" x2="170" y2="186" stroke="url(#sig-logo-g)" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

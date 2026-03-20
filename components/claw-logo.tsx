export function ClawLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left claw half — curved pincer */}
      <path
        d="M30 58C26 52 14 44 10 32C6 20 10 10 18 6C22 4 26 6 24 12C22 18 24 26 30 34"
        className="fill-primary"
        strokeLinecap="round"
      />
      {/* Left claw tip */}
      <path
        d="M18 6C14 2 8 4 6 10C4 16 6 20 10 22"
        className="fill-primary"
      />
      {/* Right claw half — curved pincer */}
      <path
        d="M34 58C38 52 50 44 54 32C58 20 54 10 46 6C42 4 38 6 40 12C42 18 40 26 34 34"
        className="fill-primary"
        strokeLinecap="round"
      />
      {/* Right claw tip */}
      <path
        d="M46 6C50 2 56 4 58 10C60 16 58 20 54 22"
        className="fill-primary"
      />
      {/* Center joint connecting the two halves */}
      <ellipse cx="32" cy="56" rx="6" ry="4" className="fill-primary" />
    </svg>
  )
}

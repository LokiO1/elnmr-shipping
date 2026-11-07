export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center flex-shrink-0`}>
      <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Majestic Lion Emblem Silhouette / Crown Peak */}
        <path d="M100 20L135 70H65Z" fill="url(#redGrad)" />
        <path d="M100 32L120 62H80Z" fill="url(#goldGrad)" />
        <circle cx="100" cy="50" r="8" fill="#ffffff" />
        <path d="M96 52C96 50 104 50 104 52C104 55 96 55 96 52Z" fill="#b91c1c" />

        {/* ELNMR Typography */}
        <text x="100" y="125" textAnchor="middle" fill="#ef4444" fontFamily="'Cinzel', 'Cairo', sans-serif" fontWeight="900" fontSize="28" letterSpacing="4">
          ELNMR
        </text>

        {/* شركة النمر للشحن Subtext */}
        <text x="100" y="155" textAnchor="middle" fill="#fbbf24" fontFamily="'Cairo', sans-serif" fontWeight="700" fontSize="13" letterSpacing="1">
          شركة النمر للشحن
        </text>
      </svg>
    </div>
  );
}

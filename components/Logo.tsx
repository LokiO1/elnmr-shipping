export function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background transparent */}
      <defs>
        <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Stylized Tiger / Peak Mountain Emblem */}
      <path d="M60 15L85 55H35Z" fill="url(#redGrad)" />
      <path d="M60 25L75 50H45Z" fill="url(#goldGrad)" />

      {/* Text EIAMR / NMR */}
      <text x="60" y="85" textAnchor="middle" fill="#dc2626" fontFamily="sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">
        ELNMR
      </text>

      {/* Subtext شركة النمر */}
      <text x="60" y="105" textAnchor="middle" fill="#f59e0b" fontFamily="sans-serif" fontWeight="700" fontSize="10">
        شركة النمر للشحن
      </text>
    </svg>
  );
}

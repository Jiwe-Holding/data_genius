export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <defs>
          <linearGradient id="lg-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0185cc" />
            <stop offset="1" stopColor="#1ac3ff" />
          </linearGradient>
        </defs>
        <rect width="34" height="34" rx="9" fill="url(#lg-mark)" />
        <g stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none">
          <path d="M8 23l6-6 5 4 7-9" />
        </g>
        <g fill="#fff">
          <circle cx="8" cy="23" r="2.2" />
          <circle cx="14" cy="17" r="2.2" />
          <circle cx="19" cy="21" r="2.2" />
          <circle cx="26" cy="12" r="2.6" />
        </g>
      </svg>
      <span className="logo__word">
        <span className="logo__data">Data</span>
        <span className="logo__genius">Genius</span>
      </span>
    </span>
  )
}

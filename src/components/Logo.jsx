export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={light ? '#fff' : '#0b1f3a'} />
        <rect x="7" y="16" width="4" height="9" rx="1" fill="#14b8a6" />
        <rect x="14" y="10" width="4" height="15" rx="1" fill={light ? '#0b1f3a' : '#fff'} />
        <rect x="21" y="6" width="4" height="19" rx="1" fill="#14b8a6" />
      </svg>
      <span>
        DATA<b>GENIUS</b>
      </span>
    </span>
  )
}

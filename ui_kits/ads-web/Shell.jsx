// Shell: page frame, navigation rail, top header bar.
// Matches the observed Align web layout: 80px collapsed rail,
// page background #F4F4F4, white content area, subtle dividers.

const { useState } = React;

function Icon({ name, size = 20, color = 'currentColor' }) {
  const s = size;
  const common = { width: s, height: s, viewBox: `0 0 ${s} ${s}`, fill: 'none', stroke: color, strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const c = (n) => n / 20 * s;
  switch (name) {
    case 'home': return <svg {...common}><path d={`M${c(3)} ${c(10)} L${c(10)} ${c(4)} L${c(17)} ${c(10)} V${c(16)} H${c(3)} Z`} /><line x1={c(8)} y1={c(16)} x2={c(8)} y2={c(11)} /><line x1={c(12)} y1={c(16)} x2={c(12)} y2={c(11)} /></svg>;
    case 'cases': return <svg {...common}><rect x={c(3)} y={c(5)} width={c(14)} height={c(12)} rx={c(1)} /><line x1={c(3)} y1={c(9)} x2={c(17)} y2={c(9)} /><line x1={c(7)} y1={c(3)} x2={c(7)} y2={c(7)} /><line x1={c(13)} y1={c(3)} x2={c(13)} y2={c(7)} /></svg>;
    case 'scans': return <svg {...common}><circle cx={c(10)} cy={c(10)} r={c(6)} /><circle cx={c(10)} cy={c(10)} r={c(2)} /></svg>;
    case 'patients': return <svg {...common}><circle cx={c(10)} cy={c(7)} r={c(3)} /><path d={`M${c(4)} ${c(17)} C${c(4)} ${c(12)}, ${c(16)} ${c(12)}, ${c(16)} ${c(17)}`} /></svg>;
    case 'messages': return <svg {...common}><path d={`M${c(3)} ${c(5)} H${c(17)} V${c(14)} H${c(8)} L${c(5)} ${c(17)} V${c(14)} H${c(3)} Z`} /></svg>;
    case 'settings': return <svg {...common}><circle cx={c(10)} cy={c(10)} r={c(3)} /><path d={`M${c(10)} ${c(3)} V${c(5)} M${c(10)} ${c(15)} V${c(17)} M${c(3)} ${c(10)} H${c(5)} M${c(15)} ${c(10)} H${c(17)} M${c(5)} ${c(5)} L${c(6.5)} ${c(6.5)} M${c(13.5)} ${c(13.5)} L${c(15)} ${c(15)} M${c(5)} ${c(15)} L${c(6.5)} ${c(13.5)} M${c(13.5)} ${c(6.5)} L${c(15)} ${c(5)}`} /></svg>;
    case 'search': return <svg {...common}><circle cx={c(9)} cy={c(9)} r={c(5)} /><line x1={c(13)} y1={c(13)} x2={c(17)} y2={c(17)} /></svg>;
    case 'bell': return <svg {...common}><path d={`M${c(5)} ${c(14)} V${c(10)} C${c(5)} ${c(7)}, ${c(7)} ${c(4)}, ${c(10)} ${c(4)} C${c(13)} ${c(4)}, ${c(15)} ${c(7)}, ${c(15)} ${c(10)} V${c(14)} L${c(16)} ${c(15)} H${c(4)} Z`} /><path d={`M${c(8)} ${c(15)} C${c(8)} ${c(17)}, ${c(12)} ${c(17)}, ${c(12)} ${c(15)}`} /></svg>;
    case 'plus': return <svg {...common}><line x1={c(10)} y1={c(4)} x2={c(10)} y2={c(16)} /><line x1={c(4)} y1={c(10)} x2={c(16)} y2={c(10)} /></svg>;
    case 'close': return <svg {...common}><line x1={c(5)} y1={c(5)} x2={c(15)} y2={c(15)} /><line x1={c(15)} y1={c(5)} x2={c(5)} y2={c(15)} /></svg>;
    case 'chevron-down': return <svg {...common}><polyline points={`${c(4)},${c(8)} ${c(10)},${c(14)} ${c(16)},${c(8)}`} /></svg>;
    case 'chevron-right': return <svg {...common}><polyline points={`${c(8)},${c(4)} ${c(14)},${c(10)} ${c(8)},${c(16)}`} /></svg>;
    case 'chevron-left': return <svg {...common}><polyline points={`${c(12)},${c(4)} ${c(6)},${c(10)} ${c(12)},${c(16)}`} /></svg>;
    case 'check': return <svg {...common}><polyline points={`${c(4)},${c(11)} ${c(9)},${c(16)} ${c(16)},${c(5)}`} /></svg>;
    case 'more': return <svg {...common}><circle cx={c(5)} cy={c(10)} r={c(1.25)} fill={color} stroke="none" /><circle cx={c(10)} cy={c(10)} r={c(1.25)} fill={color} stroke="none" /><circle cx={c(15)} cy={c(10)} r={c(1.25)} fill={color} stroke="none" /></svg>;
    case 'calendar': return <svg {...common}><rect x={c(3)} y={c(5)} width={c(14)} height={c(12)} rx={c(1)} /><line x1={c(3)} y1={c(9)} x2={c(17)} y2={c(9)} /><line x1={c(7)} y1={c(3)} x2={c(7)} y2={c(7)} /><line x1={c(13)} y1={c(3)} x2={c(13)} y2={c(7)} /></svg>;
    case 'filter': return <svg {...common}><path d={`M${c(3)} ${c(5)} H${c(17)} L${c(12)} ${c(11)} V${c(16)} L${c(8)} ${c(14)} V${c(11)} Z`} /></svg>;
    case 'upload': return <svg {...common}><polyline points={`${c(6)},${c(8)} ${c(10)},${c(4)} ${c(14)},${c(8)}`} /><line x1={c(10)} y1={c(4)} x2={c(10)} y2={c(14)} /><line x1={c(4)} y1={c(16)} x2={c(16)} y2={c(16)} /></svg>;
    case 'edit': return <svg {...common}><path d={`M${c(4)} ${c(15)} L${c(4)} ${c(12)} L${c(13)} ${c(3)} L${c(16)} ${c(6)} L${c(7)} ${c(15)} Z`} /></svg>;
    case 'sun': return <svg {...common}><circle cx={c(10)} cy={c(10)} r={c(3.5)} /><line x1={c(10)} y1={c(2)} x2={c(10)} y2={c(4)} /><line x1={c(10)} y1={c(16)} x2={c(10)} y2={c(18)} /><line x1={c(2)} y1={c(10)} x2={c(4)} y2={c(10)} /><line x1={c(16)} y1={c(10)} x2={c(18)} y2={c(10)} /><line x1={c(4.3)} y1={c(4.3)} x2={c(5.7)} y2={c(5.7)} /><line x1={c(14.3)} y1={c(14.3)} x2={c(15.7)} y2={c(15.7)} /><line x1={c(4.3)} y1={c(15.7)} x2={c(5.7)} y2={c(14.3)} /><line x1={c(14.3)} y1={c(5.7)} x2={c(15.7)} y2={c(4.3)} /></svg>;
    case 'moon': return <svg {...common}><path d={`M${c(16)} ${c(12.5)} A${c(6.5)} ${c(6.5)} 0 1 1 ${c(7.5)} ${c(4)} A${c(5.2)} ${c(5.2)} 0 0 0 ${c(16)} ${c(12.5)} Z`} /></svg>;

    /* ---------- Design-system nav icons ---------- */
    case 'layers': return <svg {...common}><polygon points={`${c(10)},${c(3)} ${c(17)},${c(7)} ${c(10)},${c(11)} ${c(3)},${c(7)}`} /><polyline points={`${c(3)},${c(10)} ${c(10)},${c(14)} ${c(17)},${c(10)}`} /><polyline points={`${c(3)},${c(13)} ${c(10)},${c(17)} ${c(17)},${c(13)}`} /></svg>;
    case 'blocks': return <svg {...common}><rect x={c(3)} y={c(3)} width={c(6)} height={c(6)} rx={c(0.8)} /><rect x={c(11)} y={c(3)} width={c(6)} height={c(6)} rx={c(0.8)} /><rect x={c(3)} y={c(11)} width={c(6)} height={c(6)} rx={c(0.8)} /><rect x={c(11)} y={c(11)} width={c(6)} height={c(6)} rx={c(0.8)} /></svg>;
    case 'layout': return <svg {...common}><rect x={c(3)} y={c(4)} width={c(14)} height={c(12)} rx={c(1)} /><line x1={c(8)} y1={c(4)} x2={c(8)} y2={c(16)} /><line x1={c(8)} y1={c(9)} x2={c(17)} y2={c(9)} /></svg>;
    case 'browser': return <svg {...common}><rect x={c(3)} y={c(4)} width={c(14)} height={c(12)} rx={c(1)} /><line x1={c(3)} y1={c(8)} x2={c(17)} y2={c(8)} /><circle cx={c(5.2)} cy={c(6)} r={c(0.4)} fill={color} stroke="none" /><circle cx={c(7)} cy={c(6)} r={c(0.4)} fill={color} stroke="none" /><circle cx={c(8.8)} cy={c(6)} r={c(0.4)} fill={color} stroke="none" /></svg>;
    case 'palette': return <svg {...common}><path d={`M${c(10)} ${c(3)} C${c(6)} ${c(3)}, ${c(3)} ${c(6)}, ${c(3)} ${c(10)} C${c(3)} ${c(14)}, ${c(6)} ${c(17)}, ${c(10)} ${c(17)} C${c(11.2)} ${c(17)}, ${c(11.8)} ${c(16.2)}, ${c(11.8)} ${c(15.4)} C${c(11.8)} ${c(14.6)}, ${c(11.2)} ${c(14)}, ${c(11.2)} ${c(13.2)} C${c(11.2)} ${c(12.4)}, ${c(12)} ${c(11.8)}, ${c(13)} ${c(11.8)} L${c(15)} ${c(11.8)} C${c(16.2)} ${c(11.8)}, ${c(17)} ${c(11)}, ${c(17)} ${c(9.8)} C${c(17)} ${c(6)}, ${c(14)} ${c(3)}, ${c(10)} ${c(3)} Z`} /><circle cx={c(6.5)} cy={c(8)} r={c(0.9)} fill={color} stroke="none" /><circle cx={c(9)} cy={c(6)} r={c(0.9)} fill={color} stroke="none" /><circle cx={c(13)} cy={c(6.5)} r={c(0.9)} fill={color} stroke="none" /><circle cx={c(14.6)} cy={c(9.5)} r={c(0.9)} fill={color} stroke="none" /></svg>;
    case 'droplet': return <svg {...common}><path d={`M${c(10)} ${c(3)} C${c(10)} ${c(3)}, ${c(5)} ${c(8.5)}, ${c(5)} ${c(12)} C${c(5)} ${c(14.8)}, ${c(7.2)} ${c(17)}, ${c(10)} ${c(17)} C${c(12.8)} ${c(17)}, ${c(15)} ${c(14.8)}, ${c(15)} ${c(12)} C${c(15)} ${c(8.5)}, ${c(10)} ${c(3)}, ${c(10)} ${c(3)} Z`} /></svg>;
    case 'type': return <svg {...common}><polyline points={`${c(4)},${c(7)} ${c(4)},${c(5)} ${c(16)},${c(5)} ${c(16)},${c(7)}`} /><line x1={c(10)} y1={c(5)} x2={c(10)} y2={c(16)} /><line x1={c(7.5)} y1={c(16)} x2={c(12.5)} y2={c(16)} /></svg>;
    case 'weight': return <svg {...common}><text x={c(4)} y={c(14)} fontFamily="Roboto, sans-serif" fontWeight="300" fontSize={c(10)} fill={color} stroke="none">A</text><text x={c(10.5)} y={c(14)} fontFamily="Roboto, sans-serif" fontWeight="700" fontSize={c(10)} fill={color} stroke="none">A</text></svg>;
    case 'ruler': return <svg {...common}><rect x={c(2.5)} y={c(7)} width={c(15)} height={c(6)} rx={c(0.8)} /><line x1={c(5.5)} y1={c(7)} x2={c(5.5)} y2={c(10)} /><line x1={c(8.5)} y1={c(7)} x2={c(8.5)} y2={c(9)} /><line x1={c(11.5)} y1={c(7)} x2={c(11.5)} y2={c(10)} /><line x1={c(14.5)} y1={c(7)} x2={c(14.5)} y2={c(9)} /></svg>;
    case 'corners': return <svg {...common}><path d={`M${c(3)} ${c(9)} L${c(3)} ${c(6)} A${c(3)} ${c(3)} 0 0 1 ${c(6)} ${c(3)} L${c(9)} ${c(3)}`} /><path d={`M${c(11)} ${c(17)} L${c(14)} ${c(17)} A${c(3)} ${c(3)} 0 0 0 ${c(17)} ${c(14)} L${c(17)} ${c(11)}`} /></svg>;
    case 'star': return <svg {...common}><polygon points={`${c(10)},${c(3)} ${c(12.2)},${c(7.8)} ${c(17)},${c(8.3)} ${c(13.3)},${c(11.5)} ${c(14.4)},${c(16.5)} ${c(10)},${c(13.8)} ${c(5.6)},${c(16.5)} ${c(6.7)},${c(11.5)} ${c(3)},${c(8.3)} ${c(7.8)},${c(7.8)}`} /></svg>;
    case 'logo-mark': return <svg {...common}><rect x={c(3)} y={c(3)} width={c(14)} height={c(14)} rx={c(1.2)} /><path d={`M${c(7)} ${c(13)} L${c(10)} ${c(7)} L${c(13)} ${c(13)} M${c(8.2)} ${c(11)} L${c(11.8)} ${c(11)}`} /></svg>;
    case 'button': return <svg {...common}><rect x={c(3)} y={c(7)} width={c(14)} height={c(6)} rx={c(1.2)} /><line x1={c(7)} y1={c(10)} x2={c(13)} y2={c(10)} /></svg>;
    case 'form': return <svg {...common}><rect x={c(3)} y={c(6)} width={c(14)} height={c(4)} rx={c(0.8)} /><rect x={c(3)} y={c(12)} width={c(14)} height={c(4)} rx={c(0.8)} /><line x1={c(6)} y1={c(8)} x2={c(11)} y2={c(8)} /></svg>;
    case 'check-square': return <svg {...common}><rect x={c(3)} y={c(3)} width={c(14)} height={c(14)} rx={c(1)} /><polyline points={`${c(6.5)},${c(10)} ${c(9.2)},${c(12.5)} ${c(14)},${c(7.5)}`} /></svg>;
    case 'tag': return <svg {...common}><path d={`M${c(3)} ${c(9)} L${c(3)} ${c(3.5)} L${c(8.5)} ${c(3.5)} L${c(17)} ${c(12)} L${c(12)} ${c(17)} Z`} /><circle cx={c(6)} cy={c(6.5)} r={c(1)} /></svg>;
    case 'avatar-ring': return <svg {...common}><circle cx={c(10)} cy={c(10)} r={c(7)} /><circle cx={c(10)} cy={c(8.5)} r={c(2.2)} /><path d={`M${c(5.5)} ${c(15.5)} C${c(6.5)} ${c(13)}, ${c(13.5)} ${c(13)}, ${c(14.5)} ${c(15.5)}`} /></svg>;
    case 'card': return <svg {...common}><rect x={c(3)} y={c(4.5)} width={c(14)} height={c(11)} rx={c(1)} /><line x1={c(6)} y1={c(8.5)} x2={c(14)} y2={c(8.5)} /><line x1={c(6)} y1={c(11)} x2={c(11)} y2={c(11)} /></svg>;
    case 'grid-dashboard': return <svg {...common}><rect x={c(3)} y={c(3)} width={c(6)} height={c(8)} rx={c(0.8)} /><rect x={c(11)} y={c(3)} width={c(6)} height={c(5)} rx={c(0.8)} /><rect x={c(3)} y={c(13)} width={c(6)} height={c(4)} rx={c(0.8)} /><rect x={c(11)} y={c(10)} width={c(6)} height={c(7)} rx={c(0.8)} /></svg>;
    case 'document': return <svg {...common}><path d={`M${c(5)} ${c(3)} L${c(12)} ${c(3)} L${c(16)} ${c(7)} L${c(16)} ${c(17)} L${c(5)} ${c(17)} Z`} /><polyline points={`${c(12)},${c(3)} ${c(12)},${c(7)} ${c(16)},${c(7)}`} /><line x1={c(7.5)} y1={c(11)} x2={c(13.5)} y2={c(11)} /><line x1={c(7.5)} y1={c(13.5)} x2={c(13.5)} y2={c(13.5)} /></svg>;
    default: return null;
  }
}

function NavItem({ icon, label, active, onClick, collapsed }) {
  return (
    <button
      onClick={onClick}
      className={`nav-item ${active ? 'active' : ''} ${collapsed ? 'collapsed' : ''}`}
      aria-current={active ? 'page' : undefined}
      title={collapsed ? label : undefined}
    >
      <span className="nav-icon"><Icon name={icon} /></span>
      {!collapsed && <span className="nav-label">{label}</span>}
    </button>
  );
}

function Logo({ height = 22 }) {
  const w = height * 67 / 28;
  return (
    <svg width={w} height={height} viewBox="0 0 67 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Align" role="img">
      <path d="M 27.122 0 C 26.71 0 26.307 0.122 25.964 0.351 C 25.622 0.58 25.355 0.905 25.197 1.286 C 25.039 1.667 24.998 2.085 25.079 2.489 C 25.159 2.893 25.357 3.265 25.649 3.556 C 25.94 3.847 26.311 4.046 26.715 4.126 C 27.119 4.206 27.538 4.165 27.919 4.008 C 28.299 3.85 28.625 3.583 28.854 3.24 C 29.082 2.898 29.205 2.495 29.205 2.083 C 29.205 1.809 29.152 1.538 29.047 1.285 C 28.943 1.032 28.789 0.803 28.596 0.609 C 28.402 0.415 28.172 0.262 27.919 0.158 C 27.666 0.053 27.395 -0.001 27.122 0 Z"/>
      <path d="M 49.686 6.862 L 52.884 6.862 L 52.934 8.19 C 53.378 7.646 53.938 7.208 54.573 6.909 C 55.209 6.609 55.903 6.456 56.606 6.46 C 60.117 6.46 62.031 8.631 62.031 12.41 L 62.031 21.217 L 58.715 21.217 L 58.715 12.521 C 58.715 10.572 57.525 9.458 55.855 9.458 C 54.186 9.458 53.002 10.572 53.002 12.521 L 53.002 21.229 L 49.686 21.229 L 49.686 6.862 Z M 21.692 21.229 L 18.38 21.229 L 18.38 0.345 L 21.7 0.345 L 21.692 21.229 Z M 28.787 21.229 L 25.464 21.229 L 25.464 6.862 L 28.787 6.862 L 28.787 21.229 Z M 11.323 6.862 L 14.604 6.862 L 14.604 21.229 L 11.323 21.229 L 11.269 19.72 C 10.092 20.913 8.495 21.6 6.82 21.634 C 2.902 21.631 0 18.479 0 14.045 C 0 9.351 3.144 6.46 6.82 6.46 C 7.656 6.435 8.487 6.594 9.256 6.925 C 10.025 7.256 10.712 7.75 11.269 8.374 L 11.323 6.862 Z M 3.393 14.045 C 3.393 16.798 5.081 18.64 7.432 18.64 C 9.573 18.636 11.487 17.085 11.487 14.045 C 11.487 11.089 9.653 9.45 7.444 9.45 C 4.997 9.45 3.404 11.399 3.404 14.045 L 3.393 14.045 Z M 42.794 14.045 C 42.794 11.047 40.906 9.45 38.758 9.45 C 36.193 9.45 34.711 11.537 34.711 14.045 C 34.711 16.687 36.308 18.64 38.758 18.64 C 41.014 18.64 42.794 16.963 42.794 14.045 Z M 45.922 19.789 C 45.922 25.954 42.315 27.998 38.069 27.998 C 36.289 28.028 34.528 27.635 32.93 26.85 L 33.754 23.997 C 35.063 24.732 36.54 25.116 38.042 25.111 C 40.512 25.111 42.61 23.526 42.61 20.677 L 42.61 19.682 C 42.043 20.305 41.348 20.798 40.573 21.129 C 39.798 21.459 38.961 21.619 38.119 21.596 C 34.251 21.596 31.326 18.487 31.326 14.011 C 31.326 9.722 34.079 6.425 38.134 6.425 C 38.972 6.397 39.806 6.554 40.576 6.885 C 41.347 7.216 42.035 7.713 42.591 8.34 L 42.633 6.827 L 45.922 6.827 L 45.922 19.789 Z"/>
      <path d="M 62.491 6.858 L 64.348 6.858 L 64.348 7.241 L 63.632 7.241 L 63.632 9.155 L 63.203 9.155 L 63.203 7.241 L 62.491 7.241 L 62.491 6.858 Z"/>
      <path d="M 64.651 6.858 L 65.213 6.858 L 65.596 7.949 C 65.684 8.213 65.795 8.715 65.795 8.715 C 65.795 8.715 65.903 8.217 65.991 7.949 L 66.374 6.858 L 66.948 6.858 L 66.948 9.155 L 66.565 9.155 L 66.565 7.953 C 66.565 7.704 66.592 7.241 66.592 7.241 C 66.592 7.241 66.5 7.662 66.423 7.888 L 65.991 9.148 L 65.646 9.148 L 65.21 7.888 C 65.137 7.662 65.041 7.241 65.041 7.241 C 65.041 7.241 65.072 7.704 65.072 7.953 L 65.072 9.148 L 64.689 9.148 L 64.651 6.858 Z"/>
    </svg>
  );
}

function LogoMark({ height = 22 }) {
  // Compact "A" mark used when the rail is collapsed.
  return (
    <svg width={height} height={height} viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Align" role="img">
      <path d="M 11.323 6.862 L 14.604 6.862 L 14.604 21.229 L 11.323 21.229 L 11.269 19.72 C 10.092 20.913 8.495 21.6 6.82 21.634 C 2.902 21.631 0 18.479 0 14.045 C 0 9.351 3.144 6.46 6.82 6.46 C 7.656 6.435 8.487 6.594 9.256 6.925 C 10.025 7.256 10.712 7.75 11.269 8.374 L 11.323 6.862 Z M 3.393 14.045 C 3.393 16.798 5.081 18.64 7.432 18.64 C 9.573 18.636 11.487 17.085 11.487 14.045 C 11.487 11.089 9.653 9.45 7.444 9.45 C 4.997 9.45 3.404 11.399 3.404 14.045 L 3.393 14.045 Z" transform="translate(7 0)"/>
    </svg>
  );
}

function NavGroup({ id, label, icon, items, collapsed, expanded, onToggle, active, onSelect }) {
  const hasActiveChild = items.some(it => it.id === active);
  if (collapsed) {
    return (
      <div className="nav-group-collapsed" title={label}>
        {items.map(it => (
          <NavItem
            key={it.id}
            icon={it.icon || icon || 'cases'}
            label={it.label}
            collapsed
            active={active === it.id}
            onClick={() => onSelect(it.id)}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={`nav-group ${expanded ? 'expanded' : ''} ${hasActiveChild ? 'has-active' : ''}`}>
      <button
        type="button"
        className="nav-group-head"
        aria-expanded={expanded}
        onClick={() => onToggle(id)}
      >
        {icon && (
          <span className="nav-group-icon"><Icon name={icon} size={16} /></span>
        )}
        <span className="nav-group-label">{label}</span>
        <span className={`nav-group-chev ${expanded ? 'open' : ''}`}>
          <Icon name="chevron-down" size={16} />
        </span>
      </button>
      {expanded && (
        <div className="nav-sub">
          {items.map(it => (
            <button
              key={it.id}
              type="button"
              className={`nav-item nav-sub-item ${active === it.id ? 'active' : ''}`}
              onClick={() => onSelect(it.id)}
              aria-current={active === it.id ? 'page' : undefined}
            >
              <span className="nav-icon">
                <Icon name={it.icon || 'cases'} size={18} />
              </span>
              <span className="nav-label">{it.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function LeftRail({ nav, setNav, collapsed, onToggleCollapsed, groups, expandedGroups, onToggleGroup }) {
  const items = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'cases', icon: 'cases', label: 'Cases' },
    { id: 'patients', icon: 'patients', label: 'Patients' },
    { id: 'scans', icon: 'scans', label: 'Scans' },
    { id: 'messages', icon: 'messages', label: 'Messages' },
  ];
  const isGrouped = Array.isArray(groups) && groups.length > 0;
  return (
    <aside className={`left-rail ${collapsed ? 'collapsed' : ''}`}>
      <div className="rail-logo">
        {collapsed ? <LogoMark /> : <Logo />}
        {onToggleCollapsed && (
          <button
            className="rail-collapse"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            title={collapsed ? 'Expand navigation' : 'Collapse navigation'}
          >
            <Icon name={collapsed ? 'chevron-right' : 'chevron-left'} size={16} />
          </button>
        )}
      </div>
      <nav className="rail-nav" aria-label="Main">
        {isGrouped
          ? groups.map(g => (
              <NavGroup
                key={g.id}
                id={g.id}
                label={g.label}
                icon={g.icon}
                items={g.items}
                collapsed={collapsed}
                expanded={expandedGroups ? expandedGroups.has(g.id) : true}
                onToggle={onToggleGroup || (() => {})}
                active={nav}
                onSelect={setNav}
              />
            ))
          : items.map(it => (
              <NavItem key={it.id} {...it} collapsed={collapsed}
                active={nav === it.id} onClick={() => setNav(it.id)} />
            ))}
      </nav>
    </aside>
  );
}

function TopBar({ onNew, unread = 2, onThemeToggle, theme = 'align-light' }) {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <span className="ti"><Icon name="search" size={18} color="var(--ads-text-muted)" /></span>
        <input placeholder="Search patients, cases, scans…" />
      </div>
      <div className="topbar-actions">
        <button
          className="btn btn-ghost icon-btn"
          aria-label={theme === 'align-dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onThemeToggle}
          title={theme === 'align-dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <Icon name={theme === 'align-dark' ? 'sun' : 'moon'} color="var(--ads-text-primary)" />
        </button>
        <button className="btn btn-ghost icon-btn" aria-label="Notifications">
          <Icon name="bell" color="var(--ads-text-primary)" />
          {unread > 0 && <span className="dot">{unread}</span>}
        </button>
        <button className="btn btn-primary btn-md" onClick={onNew}>
          <Icon name="plus" size={20} color="#fff" />
          <span>New request</span>
        </button>
        <div className="avatar avatar-md" title="Alina Dent">AD</div>
      </div>
    </header>
  );
}

Object.assign(window, { Shell: { LeftRail, TopBar, Icon, NavItem, NavGroup, Logo, LogoMark } });

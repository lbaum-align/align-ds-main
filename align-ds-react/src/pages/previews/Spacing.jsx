export function Spacing() {
  const spaces = [
    ['space-1', 4], ['space-2', 8], ['space-3', 12], ['space-4', 16],
    ['space-5', 20], ['space-6', 24], ['space-8', 32], ['space-10', 40], ['space-16', 64],
  ];
  return (
    <div className="pv-page">
      {spaces.map(([tok, px]) => (
        <div key={tok} className="pv-space-row">
          <span className="pv-space-tok">{tok}</span>
          <div className="pv-space-bar" style={{width: px}}></div>
          <span className="pv-space-size">{px}px</span>
        </div>
      ))}
    </div>
  );
}

export function ColorsNeutral() {
  return (
    <div className="pv-page">
      <div className="pv-row">
        <div className="pv-lbl">Surface</div>
        <div className="pv-grid pv-grid-5">
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-bg-surface)',border:'1px solid #eee'}}></div><div className="pv-meta"><div className="pv-name">Surface</div><div className="pv-hex">var(--ads-bg-surface)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-bg-page)'}}></div><div className="pv-meta"><div className="pv-name">Page</div><div className="pv-hex">var(--ads-bg-page)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-bg-muted)'}}></div><div className="pv-meta"><div className="pv-name">Muted</div><div className="pv-hex">var(--ads-bg-muted)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-bg-subtle)'}}></div><div className="pv-meta"><div className="pv-name">Subtle</div><div className="pv-hex">var(--ads-bg-subtle)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-bg-inverse)'}}></div><div className="pv-meta"><div className="pv-name">Inverse</div><div className="pv-hex">var(--ads-bg-inverse)</div></div></div>
        </div>
      </div>
      <div className="pv-row">
        <div className="pv-lbl">Text (black alpha)</div>
        <div className="pv-grid pv-grid-5">
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-text-primary)'}}></div><div className="pv-meta"><div className="pv-name">Primary</div><div className="pv-hex">var(--ads-text-primary)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-text-muted)'}}></div><div className="pv-meta"><div className="pv-name">Muted</div><div className="pv-hex">var(--ads-text-muted)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-text-subtle)'}}></div><div className="pv-meta"><div className="pv-name">Subtle</div><div className="pv-hex">var(--ads-text-subtle)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-border-strong)'}}></div><div className="pv-meta"><div className="pv-name">Placeholder</div><div className="pv-hex">var(--ads-border-strong)</div></div></div>
          <div className="pv-sw"><div className="pv-chip-sm" style={{background:'var(--ads-text-disabled)'}}></div><div className="pv-meta"><div className="pv-name">Disabled</div><div className="pv-hex">var(--ads-text-disabled)</div></div></div>
        </div>
      </div>
    </div>
  );
}

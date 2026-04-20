import { Logo } from '../../components/Shell';

export function LogoPreview() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-3" style={{gap:14}}>
        <div className="pv-logo-cell" style={{color:'var(--ads-text-primary)'}}><Logo height={28} /><span className="pv-lbl">On surface</span></div>
        <div className="pv-logo-cell dark"><Logo height={28} /><span className="pv-lbl">On inverse</span></div>
        <div className="pv-logo-cell blue"><Logo height={28} /><span className="pv-lbl">On primary</span></div>
      </div>
    </div>
  );
}

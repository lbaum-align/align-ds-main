import { Icon } from '../../components/Icon';

export function Iconography() {
  const icons = ['plus','close','chevron-down','check','search','calendar','edit','more','home','cases','scans','patients','messages','settings','bell','filter','upload','sun','moon'];
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-8" style={{gap:12}}>
        {icons.map(name => (
          <div key={name} className="pv-icon-cell">
            <Icon name={name} size={20} />
            <span style={{fontSize:10,color:'var(--ads-text-muted)',fontFamily:'ui-monospace,Menlo,monospace',lineHeight:'12px'}}>{name}</span>
          </div>
        ))}
      </div>
      <div style={{fontSize:11,color:'var(--ads-text-muted)',marginTop:10}}>Stroke 1.75 · rounded caps · inherits <code>currentColor</code>.</div>
    </div>
  );
}

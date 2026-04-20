export function ColorsStatus() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-5">
        <div className="pv-sw"><div className="pv-chip" style={{background:'#D43F58'}}></div><div className="pv-meta"><div className="pv-name">Error / Required</div><div className="pv-hex">#D43F58</div></div></div>
        <div className="pv-sw"><div className="pv-chip" style={{background:'#CF2E38'}}></div><div className="pv-meta"><div className="pv-name">Danger button</div><div className="pv-hex">#CF2E38</div></div></div>
        <div className="pv-sw"><div className="pv-chip" style={{background:'#25764A'}}></div><div className="pv-meta"><div className="pv-name">Success</div><div className="pv-hex">#25764A</div></div></div>
        <div className="pv-sw"><div className="pv-chip" style={{background:'#FA8E41'}}></div><div className="pv-meta"><div className="pv-name">Warning</div><div className="pv-hex">#FA8E41</div></div></div>
        <div className="pv-sw"><div className="pv-chip" style={{background:'var(--ads-blue-500)'}}></div><div className="pv-meta"><div className="pv-name">Info</div><div className="pv-hex">var(--ads-blue-500)</div></div></div>
      </div>
    </div>
  );
}

export function ColorsTags() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-6">
        <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><span className="pv-tag" style={{background:'var(--ads-tag-blue-bg)',borderColor:'var(--ads-tag-blue-br)',color:'var(--ads-blue-text)'}}>Blue tag</span><span className="pv-hex">var(--ads-tag-blue-bg)</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><span className="pv-tag" style={{background:'#DCFCE8',borderColor:'#B2EDC8',color:'#006131'}}>Green tag</span><span className="pv-hex">#DCFCE8 / #006131</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><span className="pv-tag" style={{background:'#FFF0F9',borderColor:'#FCD4EC',color:'#A30564'}}>Red tag</span><span className="pv-hex">#FFF0F9 / #A30564</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><span className="pv-tag" style={{background:'#FFF0E5',borderColor:'#F7DAC8',color:'#A04000'}}>Orange tag</span><span className="pv-hex">#FFF0E5 / #A04000</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><span className="pv-tag" style={{background:'#F3EBFF',borderColor:'#DCCDF5',color:'#542196'}}>Purple tag</span><span className="pv-hex">#F3EBFF / #542196</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-start'}}><span className="pv-tag" style={{background:'#FFF0F9',borderColor:'#FCD4EC',color:'#A30564'}}>Magenta tag</span><span className="pv-hex">#FFF0F9 / #A30564</span></div>
      </div>
    </div>
  );
}

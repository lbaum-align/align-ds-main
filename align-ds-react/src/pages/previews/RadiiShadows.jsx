export function RadiiShadows() {
  return (
    <div className="pv-page pv-page-dim">
      <div className="pv-split">
        <div className="pv-panel">
          <div className="pv-h" style={{marginBottom:16,fontWeight:500}}>Corner radius</div>
          <div className="pv-rad-grid">
            <div className="pv-rad-cell"><div className="pv-rad-shape" style={{borderRadius:0}}></div><div className="pv-rad-tok">radius-0</div><div className="pv-rad-val">0</div></div>
            <div className="pv-rad-cell"><div className="pv-rad-shape" style={{borderRadius:2}}></div><div className="pv-rad-tok">radius-xs</div><div className="pv-rad-val">2</div></div>
            <div className="pv-rad-cell"><div className="pv-rad-shape" style={{borderRadius:4}}></div><div className="pv-rad-tok">radius-sm</div><div className="pv-rad-val">4 · default</div></div>
            <div className="pv-rad-cell"><div className="pv-rad-shape" style={{borderRadius:8}}></div><div className="pv-rad-tok">radius-md</div><div className="pv-rad-val">8</div></div>
            <div className="pv-rad-cell"><div className="pv-rad-shape pill" style={{borderRadius:28}}></div><div className="pv-rad-tok">radius-pill</div><div className="pv-rad-val">28 · tags, toggle</div></div>
            <div className="pv-rad-cell"><div className="pv-rad-shape circle"></div><div className="pv-rad-tok">radius-full</div><div className="pv-rad-val">&#x221e; · avatars</div></div>
          </div>
        </div>
        <div className="pv-panel">
          <div className="pv-h" style={{marginBottom:16,fontWeight:500}}>Elevation</div>
          <div className="pv-elev-stack">
            <div className="pv-elev-row"><div className="pv-elev-surface pv-elev-sm"></div><div><div className="pv-elev-name">shadow-sm</div><div className="pv-elev-use">Cards, popovers, contextual menus</div></div></div>
            <div className="pv-elev-row"><div className="pv-elev-surface pv-elev-md"></div><div><div className="pv-elev-name">shadow-md</div><div className="pv-elev-use">Toasts, inline notifications</div></div></div>
            <div className="pv-elev-row"><div className="pv-elev-surface pv-elev-lg"></div><div><div className="pv-elev-name">shadow-lg</div><div className="pv-elev-use">Modals, sheets</div></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

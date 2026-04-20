export function TypeWeights() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-3" style={{gap:24}}>
        <div className="pv-weight-cell"><div className="pv-weight-big" style={{fontWeight:300}}>Aa Bb Cc</div><div className="pv-lbl">Roboto Light · 300</div><div className="pv-weight-use">Display-only (44/52). Cover + hero.</div></div>
        <div className="pv-weight-cell"><div className="pv-weight-big" style={{fontWeight:400}}>Aa Bb Cc</div><div className="pv-lbl">Roboto Regular · 400</div><div className="pv-weight-use">Body, labels, button copy. 85% of UI text.</div></div>
        <div className="pv-weight-cell"><div className="pv-weight-big" style={{fontWeight:500}}>Aa Bb Cc</div><div className="pv-lbl">Roboto Medium · 500</div><div className="pv-weight-use">Section headings, card titles, inline message headlines, avatar monograms.</div></div>
      </div>
    </div>
  );
}

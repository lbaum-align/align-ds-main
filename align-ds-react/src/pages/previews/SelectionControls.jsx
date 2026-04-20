import { Checkbox, Radio, Toggle } from '../../components/Kit';

export function SelectionControls() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-3" style={{gap:20}}>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="pv-h" style={{marginBottom:4}}>Checkbox</div>
          <Checkbox label="Unselected" />
          <Checkbox checked label="Selected" />
          <Checkbox indeterminate label="Indeterminate" />
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="pv-h" style={{marginBottom:4}}>Radio</div>
          <Radio label="Option A" />
          <Radio checked label="Option B (selected)" />
          <Radio label="Option C (disabled)" />
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="pv-h" style={{marginBottom:4}}>Toggle</div>
          <Toggle label="Off" />
          <Toggle on label="On" />
          <Toggle label="Disabled" />
        </div>
      </div>
    </div>
  );
}

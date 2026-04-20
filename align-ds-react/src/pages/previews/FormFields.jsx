import { TextField } from '../../components/Kit';

export function FormFields() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-3" style={{gap:20}}>
        <TextField label="Label" placeholder="Placeholder text" helper="Optional helper text" />
        <TextField label="Label" required value="Typing here..." helper="Focused state" />
        <TextField label="Label" value="invalid value" error="Please enter a valid value" />
      </div>
    </div>
  );
}

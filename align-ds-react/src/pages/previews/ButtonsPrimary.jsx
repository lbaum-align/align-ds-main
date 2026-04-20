import { Button } from '../../components/Kit';

export function ButtonsPrimary() {
  return (
    <div className="pv-page">
      <div className="pv-h" style={{marginBottom:12}}>Primary</div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:24}}>
        <Button variant="primary">Enabled</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </div>
      <div className="pv-h" style={{marginBottom:12}}>Secondary</div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <Button variant="secondary">Enabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </div>
    </div>
  );
}

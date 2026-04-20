import { Button } from '../../components/Kit';

export function ButtonsOther() {
  return (
    <div className="pv-page">
      <div className="pv-h" style={{marginBottom:12}}>Ghost</div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:24}}>
        <Button variant="ghost">Enabled</Button>
        <Button variant="ghost" disabled>Disabled</Button>
      </div>
      <div className="pv-h" style={{marginBottom:12}}>Danger</div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
        <Button danger>Delete</Button>
        <Button danger disabled>Delete</Button>
      </div>
    </div>
  );
}

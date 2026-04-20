import { Avatar, ProgressBar } from '../../components/Kit';

export function AvatarsProgress() {
  return (
    <div className="pv-page">
      <div className="pv-grid pv-grid-2" style={{gap:32}}>
        <div>
          <div className="pv-h" style={{marginBottom:12}}>Avatar sizes</div>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <Avatar name="AD" size="xs" />
            <Avatar name="AD" size="sm" />
            <Avatar name="AD" size="md" />
            <Avatar name="AD" size="lg" />
          </div>
        </div>
        <div>
          <div className="pv-h" style={{marginBottom:12}}>Progress</div>
          <div style={{marginBottom:12}}>
            <ProgressBar label="Case intake" value={25} hint="Step 1 of 4" />
          </div>
          <div style={{marginBottom:12}}>
            <ProgressBar label="Scan processing" value={75} hint="Almost done" />
          </div>
          <div>
            <ProgressBar label="Upload" value={60} tone="red" hint="Upload failed — retry" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Card, Accordion, Button } from '../../components/Kit';

export function CardModal() {
  return (
    <div className="pv-page pv-page-dim">
      <div className="pv-grid pv-grid-2" style={{gap:16,alignItems:'flex-start'}}>
        <div>
          <Accordion items={[
            { title: 'Patient profile', body: <p className="muted">Patient details appear here.</p> },
            { title: 'Treatment history', body: <p className="muted">Case #AT-09244 opened 12 Mar. Last scan uploaded 2 days ago.</p> },
          ]} />
        </div>
        <div>
          <div className="modal" style={{position:'relative',width:'100%',maxWidth:480}}>
            <div className="modal-head">
              <h2>Delete case file?</h2>
            </div>
            <div className="modal-body">This will permanently remove the case and all related scans. This action cannot be undone.</div>
            <div className="modal-foot">
              <Button variant="secondary" size="sm">Cancel</Button>
              <Button danger size="sm">Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

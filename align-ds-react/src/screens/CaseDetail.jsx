import { useState } from 'react';
import { Button, Tag, Card, Accordion, Tabs, ProgressBar } from '../components';

export function CaseDetail({ openDelete }) {
  const [tab, setTab] = useState('Overview');
  return (
    <div className="page">
      <div className="breadcrumb">
        <a className="link">Cases</a><span className="sep">/</span><span>#AT-09244</span>
      </div>
      <div className="page-head">
        <div>
          <h1>Emma Johnson <span className="case-id">#AT-09244</span></h1>
          <div className="meta-row">
            <Tag tone="blue">In treatment</Tag>
            <span className="muted">Opened 12 Mar 2026</span>
            <span className="sep-dot">&middot;</span>
            <span className="muted">Doctor: Dr. Park</span>
          </div>
        </div>
        <div className="head-actions">
          <Button variant="secondary" icon="edit">Edit</Button>
          <Button variant="secondary" danger onClick={openDelete}>Delete case</Button>
        </div>
      </div>

      <Tabs tabs={['Overview', 'Scans', 'Treatment plan', 'Messages', 'Activity']} active={tab} onChange={setTab} />

      <div className="grid-2">
        <div className="stack">
          <Accordion items={[
            { title: 'Patient profile', body: (
              <div className="kv">
                <div><span>Date of birth</span><b>14 Aug 1994</b></div>
                <div><span>Phone</span><b>+1 (415) 555-0129</b></div>
                <div><span>Email</span><b>emma.j@example.com</b></div>
                <div><span>Insurance</span><b>Delta Dental &middot; Group 4411</b></div>
              </div>
            )},
            { title: 'Treatment history', body: (
              <p className="muted">Case opened 12 Mar. Initial scan uploaded 14 Mar. Treatment plan approved 17 Mar. Currently on aligner 14 of 24.</p>
            )},
            { title: 'Notes', body: (
              <p className="muted">Patient reports mild discomfort on aligner changeover. Follow up at next visit.</p>
            )},
          ]} />
        </div>

        <div className="stack">
          <Card title="Latest scan" action={<a className="link">View full</a>}>
            <div className="scan-preview">
              <div className="scan-img" />
              <div className="scan-meta">
                <div><span className="muted">Captured</span><b>17 Mar 2026</b></div>
                <div><span className="muted">Device</span><b>iTero Element 5D</b></div>
                <div><span className="muted">Resolution</span><b>High</b></div>
              </div>
            </div>
          </Card>

          <Card title="Next aligner">
            <ProgressBar label="Aligner 14 of 24" value={58} hint="Wear through 29 Apr" />
          </Card>
        </div>
      </div>
    </div>
  );
}

// Screens for the click-through prototype.

const { useState: useSt, useMemo } = React;
const { Button, TextField, Checkbox, Tag, Avatar, Card, Accordion, Tabs, ProgressBar, Modal, Notification, Toggle, Radio } = window.Kit;
const { Icon } = window.Shell;

/* --------------------------- HOME / DASHBOARD --------------------------- */
function Home({ go, openNewRequest }) {
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Good afternoon, Alina</h1>
          <p className="sub">You have 4 open cases and 2 scans awaiting review.</p>
        </div>
        <div className="head-actions">
          <Button variant="secondary" icon="calendar">This week</Button>
          <Button variant="primary" icon="plus" onClick={openNewRequest}>New request</Button>
        </div>
      </div>

      <div className="grid-3">
        <Card>
          <div className="stat"><div className="stat-n">12</div><div className="stat-l">Active cases</div></div>
        </Card>
        <Card>
          <div className="stat"><div className="stat-n">2</div><div className="stat-l">Scans pending review</div></div>
        </Card>
        <Card>
          <div className="stat"><div className="stat-n">98%</div><div className="stat-l">On-time submission</div></div>
        </Card>
      </div>

      <div className="grid-2">
        <Card title="Recent cases" action={<a className="link" onClick={() => go('cases')}>See all</a>}>
          <table className="tbl">
            <thead><tr><th>Patient</th><th>Case</th><th>Stage</th><th>Updated</th></tr></thead>
            <tbody>
              <tr><td><Avatar name="EJ" size="xs" /> Emma Johnson</td><td className="mono">#AT-09244</td><td><Tag tone="blue">In treatment</Tag></td><td className="muted">2h ago</td></tr>
              <tr><td><Avatar name="NM" size="xs" /> Noah Miller</td><td className="mono">#AT-09240</td><td><Tag tone="orange">Awaiting scan</Tag></td><td className="muted">Yesterday</td></tr>
              <tr><td><Avatar name="SR" size="xs" /> Sara Reyes</td><td className="mono">#AT-09238</td><td><Tag tone="green">Approved</Tag></td><td className="muted">2d ago</td></tr>
              <tr><td><Avatar name="KP" size="xs" /> Kai Park</td><td className="mono">#AT-09235</td><td><Tag tone="red">Rejected</Tag></td><td className="muted">3d ago</td></tr>
            </tbody>
          </table>
        </Card>

        <Card title="Treatment progress">
          <ProgressBar label="Emma Johnson · Aligners 14/24" value={58} hint="58% complete" />
          <div className="spacer" />
          <ProgressBar label="Noah Miller · Scan processing" value={75} hint="Expected by 4pm" />
          <div className="spacer" />
          <ProgressBar label="Ava Costa · Upload" value={60} tone="red" hint="Upload failed — retry" />
        </Card>
      </div>
    </div>
  );
}

/* --------------------------- CASES LIST --------------------------- */
function Cases() {
  const [tab, setTab] = useSt('All');
  const [filter, setFilter] = useSt('');
  const all = [
    { id: 'AT-09244', patient: 'Emma Johnson', stage: 'In treatment', tone: 'blue', doctor: 'Dr. Park', updated: '2h' },
    { id: 'AT-09240', patient: 'Noah Miller',  stage: 'Awaiting scan', tone: 'orange', doctor: 'Dr. Park', updated: '1d' },
    { id: 'AT-09238', patient: 'Sara Reyes',   stage: 'Approved', tone: 'green', doctor: 'Dr. Park', updated: '2d' },
    { id: 'AT-09235', patient: 'Kai Park',     stage: 'Rejected', tone: 'red', doctor: 'Dr. Singh', updated: '3d' },
    { id: 'AT-09231', patient: 'Leo Chen',     stage: 'In treatment', tone: 'blue', doctor: 'Dr. Singh', updated: '4d' },
    { id: 'AT-09227', patient: 'Maya Patel',   stage: 'Planning', tone: 'purple', doctor: 'Dr. Singh', updated: '5d' },
  ];
  const rows = all.filter(r => (tab === 'All' || r.stage === tab) && (!filter || r.patient.toLowerCase().includes(filter.toLowerCase()) || r.id.toLowerCase().includes(filter.toLowerCase())));

  return (
    <div className="page">
      <div className="page-head">
        <h1>Cases</h1>
        <div className="head-actions">
          <Button variant="secondary" icon="upload">Import</Button>
          <Button variant="primary" icon="plus">New case</Button>
        </div>
      </div>

      <Tabs tabs={['All', 'Planning', 'Awaiting scan', 'In treatment', 'Approved']} active={tab} onChange={setTab} />

      <div className="toolbar toolbar-split">
        <div className="toolbar-left">
          <TextField icon="search" placeholder="Search by patient or case ID" value={filter} onChange={e => setFilter(e.target.value)} />
        </div>
        <div className="toolbar-right">
          <Button variant="secondary" icon="filter">Filter</Button>
          <Button variant="secondary" icon="calendar">Date range</Button>
        </div>
      </div>

      <Card>
        <table className="tbl tbl-wide">
          <thead><tr><th style={{width:32}}><Checkbox /></th><th>Case</th><th>Patient</th><th>Doctor</th><th>Stage</th><th>Updated</th><th style={{width:40}}></th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td><Checkbox /></td>
                <td className="mono">#{r.id}</td>
                <td><Avatar name={r.patient.split(' ').map(s=>s[0]).join('')} size="xs" /> {r.patient}</td>
                <td className="muted">{r.doctor}</td>
                <td><Tag tone={r.tone}>{r.stage}</Tag></td>
                <td className="muted">{r.updated} ago</td>
                <td><button className="icon-btn-sm"><Icon name="more" size={16} color="var(--ads-icon-muted)" /></button></td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan="7" className="empty">No cases match your filters.</td></tr>}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* --------------------------- CASE DETAIL --------------------------- */
function CaseDetail({ openDelete }) {
  const [tab, setTab] = useSt('Overview');
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
            <span className="sep-dot">·</span>
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
                <div><span>Insurance</span><b>Delta Dental · Group 4411</b></div>
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

/* --------------------------- NEW REQUEST (form) --------------------------- */
function NewRequestForm({ onCancel, onSubmit }) {
  const [type, setType] = useSt('feature');
  const [title, setTitle] = useSt('');
  const [priority, setPriority] = useSt('Medium');
  const [notify, setNotify] = useSt(true);
  const [desc, setDesc] = useSt('');
  const errTitle = title.length > 0 && title.length < 6 ? 'Title must be at least 6 characters.' : '';
  return (
    <div className="page">
      <div className="breadcrumb"><a className="link">Home</a><span className="sep">/</span><span>New request</span></div>
      <div className="page-head"><h1>New request</h1></div>

      <Card>
        <h2 style={{ marginBottom: 12 }}>Request type</h2>
        <div className="radio-row">
          <Radio checked={type==='bug'} onChange={() => setType('bug')} label="Bug — something isn't working as expected." />
          <Radio checked={type==='feature'} onChange={() => setType('feature')} label="Feature request — the library needs to be modified or extended." />
          <Radio checked={type==='question'} onChange={() => setType('question')} label="Question — you need clarification about a component." />
        </div>
      </Card>

      <Card>
        <div className="form-grid">
          <TextField label="Title" required placeholder="Short summary" value={title} onChange={e => setTitle(e.target.value)} error={errTitle} helper="Keep it concise — one sentence." />
          <div className="field">
            <span className="field-label">Priority</span>
            <div className="select">
              <span>{priority}</span>
              <Icon name="chevron-down" size={16} color="var(--ads-icon-muted)" />
            </div>
          </div>
          <label className="field field-full">
            <span className="field-label">Description<span className="req">*</span></span>
            <span className="input-wrap">
              <textarea placeholder="Provide a clear, concise description of the problem. Attach screenshots or links if helpful." rows={5} value={desc} onChange={e => setDesc(e.target.value)} />
            </span>
            <span className="field-helper">Markdown supported.</span>
          </label>
          <div className="field field-full">
            <Toggle on={notify} onChange={setNotify} label="Email me when this request is updated" />
          </div>
        </div>
      </Card>

      <div className="form-actions">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={onSubmit}>Submit request</Button>
      </div>
    </div>
  );
}

Object.assign(window, { Screens: { Home, Cases, CaseDetail, NewRequestForm } });

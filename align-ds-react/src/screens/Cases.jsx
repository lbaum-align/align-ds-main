import { useState } from 'react';
import { Button, TextField, Checkbox, Tag, Avatar, Card, Tabs } from '../components';
import { Icon } from '../components/Icon';

export function Cases() {
  const [tab, setTab] = useState('All');
  const [filter, setFilter] = useState('');
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

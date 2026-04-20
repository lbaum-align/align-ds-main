import { Button, Card, Avatar, Tag, ProgressBar } from '../components';

export function Home({ go, openNewRequest }) {
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

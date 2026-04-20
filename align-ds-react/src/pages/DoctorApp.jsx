// Doctor Site Prototype — mirrors ui_kits/ads-web/index.html
import { useState, useEffect } from 'react';
import { LeftRail, TopBar } from '../components/Shell';
import { Modal, Notification, Button } from '../components/Kit';
import { Home } from '../screens/Home';
import { Cases } from '../screens/Cases';
import { CaseDetail } from '../screens/CaseDetail';
import { NewRequestForm } from '../screens/NewRequestForm';

export function DoctorApp() {
  const [nav, setNav] = useState(() => localStorage.getItem('ads_nav') || 'home');
  const [view, setView] = useState(() => localStorage.getItem('ads_view') || 'home');
  const [theme, setTheme] = useState(() => localStorage.getItem('ads_theme') || 'align-dark');
  const [railCollapsed, setRailCollapsed] = useState(() => localStorage.getItem('ads_rail_collapsed') === '1');
  const [sizeMode, setSizeMode] = useState(() => localStorage.getItem('ads_size_mode') || 'web');
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => { localStorage.setItem('ads_nav', nav); }, [nav]);
  useEffect(() => { localStorage.setItem('ads_view', view); }, [view]);
  useEffect(() => { localStorage.setItem('ads_rail_collapsed', railCollapsed ? '1' : '0'); }, [railCollapsed]);
  useEffect(() => {
    localStorage.setItem('ads_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem('ads_size_mode', sizeMode);
    document.documentElement.setAttribute('data-size-mode', sizeMode);
  }, [sizeMode]);

  const go = (v) => {
    setView(v);
    if (v === 'home') setNav('home');
    if (v === 'cases' || v === 'caseDetail') setNav('cases');
    if (v === 'newRequest') setNav('home');
  };

  const pushToast = (t) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(ts => [...ts, { id, ...t }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), 4500);
  };

  let body;
  if (view === 'home') body = <Home go={go} openNewRequest={() => go('newRequest')} />;
  else if (view === 'cases') body = (
    <div onClick={e => {
      const row = e.target.closest('tbody tr');
      if (row && !e.target.closest('button,a,.cbx,.check')) go('caseDetail');
    }}><Cases /></div>
  );
  else if (view === 'caseDetail') body = <CaseDetail openDelete={() => setDeleteOpen(true)} />;
  else if (view === 'newRequest') body = <NewRequestForm onCancel={() => go('home')} onSubmit={() => { pushToast({ tone: 'success', title: 'Request submitted:', body: 'the ADS team will respond within 2 business days.' }); go('home'); }} />;
  else body = <Home go={go} openNewRequest={() => go('newRequest')} />;

  const onNav = (k) => {
    setNav(k);
    if (k === 'home') setView('home');
    if (k === 'cases') setView('cases');
    if (k === 'patients' || k === 'scans' || k === 'messages' || k === 'settings') setView(k);
  };

  return (
    <div className={`app ${railCollapsed ? 'rail-collapsed' : ''}`}>
      <LeftRail nav={nav} setNav={onNav}
        collapsed={railCollapsed}
        onToggleCollapsed={() => setRailCollapsed(c => !c)} />
      <div>
        <TopBar
          onNew={() => go('newRequest')}
          theme={theme}
          onThemeToggle={() => setTheme(t => t === 'align-dark' ? 'align-light' : 'align-dark')}
          sizeMode={sizeMode}
          onSizeModeToggle={() => setSizeMode(m => m === 'web' ? 'scanner' : 'web')}
        />
        {['patients', 'scans', 'messages', 'settings'].includes(view) ? (
          <div className="page">
            <div className="page-head"><h1>{view[0].toUpperCase() + view.slice(1)}</h1></div>
            <div className="card" style={{padding: '40px', textAlign: 'center', color: 'var(--ads-text-muted)'}}>
              This area isn't wired up in the UI kit demo.
            </div>
          </div>
        ) : body}
      </div>

      <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)} title="Delete case file?" footer={
        <>
          <Button variant="secondary" onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button danger onClick={() => { setDeleteOpen(false); pushToast({ tone: 'success', title: 'Case deleted:', body: '#AT-09244 removed from your list.' }); go('cases'); }}>Delete case</Button>
        </>
      }>
        This will permanently remove case <b>#AT-09244</b> and all related scans. This action cannot be undone.
      </Modal>

      <div className="toast-stack">
        {toasts.map(t => (
          <Notification key={t.id} tone={t.tone} title={t.title} body={t.body} onClose={() => setToasts(ts => ts.filter(x => x.id !== t.id))} />
        ))}
      </div>
    </div>
  );
}

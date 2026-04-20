import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { BrowserApp } from './pages/BrowserApp';
import { DoctorApp } from './pages/DoctorApp';

function BrowserWrapper() {
  const navigate = useNavigate();
  return <BrowserApp onOpenApp={() => navigate('/app')} />;
}

function AppRoutes() {
  const [theme] = useState(() => localStorage.getItem('ads_theme') || 'align-dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<BrowserWrapper />} />
      <Route path="/app/*" element={<DoctorApp />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

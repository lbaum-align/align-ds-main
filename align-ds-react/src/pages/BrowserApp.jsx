// Design System Browser — mirrors the original index.html behavior
import { useState, useEffect, useCallback } from 'react';
import { LeftRail } from '../components/Shell';
import { Icon } from '../components/Icon';
import * as Previews from './previews';

const PREVIEW_MAP = {
  'colors-blue': Previews.ColorsBlue,
  'colors-neutral': Previews.ColorsNeutral,
  'colors-status': Previews.ColorsStatus,
  'colors-tags': Previews.ColorsTags,
  'type-scale': Previews.TypeScale,
  'type-weights': Previews.TypeWeights,
  'spacing': Previews.Spacing,
  'radii-shadows': Previews.RadiiShadows,
  'iconography': Previews.Iconography,
  'logo': Previews.LogoPreview,
  'buttons-primary': Previews.ButtonsPrimary,
  'buttons-other': Previews.ButtonsOther,
  'form-fields': Previews.FormFields,
  'selection-controls': Previews.SelectionControls,
  'tags': Previews.TagsPreview,
  'avatars-progress': Previews.AvatarsProgress,
  'notifications': Previews.NotificationsPreview,
  'card-modal': Previews.CardModal,
};

const GROUPS = [
  {
    id: 'foundations',
    label: 'Foundations',
    icon: 'layers',
    items: [
      { id: 'colors-blue',    label: 'Colors — Blue',       icon: 'droplet' },
      { id: 'colors-neutral', label: 'Colors — Neutral',    icon: 'palette' },
      { id: 'colors-status',  label: 'Colors — Status',     icon: 'palette' },
      { id: 'colors-tags',    label: 'Colors — Tag tints',  icon: 'palette' },
      { id: 'type-scale',     label: 'Type — Scale',        icon: 'type' },
      { id: 'type-weights',   label: 'Type — Weights',      icon: 'weight' },
      { id: 'spacing',        label: 'Spacing',             icon: 'ruler' },
      { id: 'radii-shadows',  label: 'Radii & shadows',     icon: 'corners' },
      { id: 'iconography',    label: 'Iconography',         icon: 'star' },
      { id: 'logo',           label: 'Logo',                icon: 'logo-mark' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: 'blocks',
    items: [
      { id: 'buttons-primary',     label: 'Buttons — Primary/Secondary', icon: 'button' },
      { id: 'buttons-other',       label: 'Buttons — Other',             icon: 'button' },
      { id: 'form-fields',         label: 'Form fields',                 icon: 'form' },
      { id: 'selection-controls',  label: 'Selection controls',          icon: 'check-square' },
      { id: 'tags',                label: 'Tags',                        icon: 'tag' },
      { id: 'avatars-progress',    label: 'Avatars & progress',          icon: 'avatar-ring' },
      { id: 'notifications',       label: 'Notifications',               icon: 'bell' },
      { id: 'card-modal',          label: 'Card & modal',                icon: 'card' },
    ],
  },
  {
    id: 'ui-kit',
    label: 'UI Kit',
    icon: 'layout',
    items: [
      { id: 'ads-web-full', label: 'ADS Web — full app', icon: 'browser' },
    ],
  },
];

const ITEM_INDEX = (() => {
  const out = {};
  GROUPS.forEach(g => g.items.forEach(it => { out[it.id] = { ...it, group: g.id }; }));
  return out;
})();

const DEFAULT_ITEM = GROUPS[0].items[0].id;

export function BrowserApp({ onOpenApp }) {
  const [active, setActive] = useState(() => DEFAULT_ITEM);
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem('ads_browser_rail_collapsed') === '1');
  const [sizeMode, setSizeMode] = useState(() => localStorage.getItem('ads_size_mode') || 'web');
  const [theme, setTheme] = useState(() => localStorage.getItem('ads_theme') || 'align-dark');
  const [expanded, setExpanded] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('ads_browser_expanded') || 'null');
      if (Array.isArray(saved)) return new Set(saved);
    } catch (e) {}
    return new Set(GROUPS.map(g => g.id));
  });

  const currentGroup = ITEM_INDEX[active] ? ITEM_INDEX[active].group : GROUPS[0].id;

  useEffect(() => {
    localStorage.setItem('ads_browser_rail_collapsed', collapsed ? '1' : '0');
  }, [collapsed]);

  useEffect(() => {
    localStorage.setItem('ads_browser_expanded', JSON.stringify(Array.from(expanded)));
  }, [expanded]);

  useEffect(() => {
    localStorage.setItem('ads_size_mode', sizeMode);
    document.documentElement.setAttribute('data-size-mode', sizeMode);
  }, [sizeMode]);

  useEffect(() => {
    localStorage.setItem('ads_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    setExpanded(prev => {
      if (prev.has(currentGroup)) return prev;
      const next = new Set(prev);
      next.add(currentGroup);
      return next;
    });
  }, [currentGroup]);

  const onSelect = useCallback((id) => {
    if (id === 'ads-web-full') {
      onOpenApp && onOpenApp();
      return;
    }
    if (ITEM_INDEX[id]) setActive(id);
  }, [onOpenApp]);

  const onToggleGroup = useCallback((id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  const PreviewComponent = PREVIEW_MAP[active];

  return (
    <div className={`app ${collapsed ? 'rail-collapsed' : ''}`}>
      <LeftRail
        nav={active}
        setNav={onSelect}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed(c => !c)}
        groups={GROUPS}
        expandedGroups={expanded}
        onToggleGroup={onToggleGroup}
      />
      <main className="browser-main">
        <div className="browser-toolbar">
          <span className="browser-toolbar-title">
            {ITEM_INDEX[active] ? ITEM_INDEX[active].label : 'Preview'}
          </span>
          <div className="browser-toolbar-actions">
            <button
              className="browser-toggle-btn"
              onClick={() => setSizeMode(m => m === 'web' ? 'scanner' : 'web')}
              title={sizeMode === 'web' ? 'Switch to scanner mode' : 'Switch to web mode'}
            >
              <span className={`browser-toggle-opt ${sizeMode === 'web' ? 'active' : ''}`}>WEB</span>
              <span className={`browser-toggle-opt ${sizeMode === 'scanner' ? 'active' : ''}`}>SCANNER</span>
            </button>
            <button
              className="btn btn-ghost icon-btn"
              onClick={() => setTheme(t => t === 'align-dark' ? 'align-light' : 'align-dark')}
              title={theme === 'align-dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={theme === 'align-dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Icon name={theme === 'align-dark' ? 'sun' : 'moon'} color="var(--ads-text-primary)" />
            </button>
          </div>
        </div>
        {PreviewComponent ? <PreviewComponent /> : (
          <div style={{padding: 40, color: 'var(--ads-text-muted)'}}>Select a component from the sidebar.</div>
        )}
      </main>
    </div>
  );
}

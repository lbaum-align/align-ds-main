// Core form controls + status widgets for the ADS kit.
import { useState } from 'react';
import { Icon } from './Icon';

export function Button({ variant = 'primary', size = 'md', children, icon, iconRight, disabled, onClick, danger, ...rest }) {
  const cls = ['btn', `btn-${danger ? 'danger' : variant}`, `btn-${size}`, disabled ? 'disabled' : ''].join(' ');
  return (
    <button className={cls} disabled={disabled} onClick={onClick} {...rest}>
      {icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={16} />}
    </button>
  );
}

export function TextField({ label, required, placeholder, value, onChange, helper, error, type = 'text', icon }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}{required && <span className="req">*</span>}</span>}
      <span className={`input-wrap ${error ? 'error' : ''} ${icon ? 'has-icon' : ''}`}>
        {icon && <span className="input-icon"><Icon name={icon} size={16} color="var(--ads-icon-muted)" /></span>}
        <input type={type} placeholder={placeholder} value={value || ''} onChange={onChange} />
      </span>
      {(helper || error) && <span className={`field-helper ${error ? 'error' : ''}`}>{error || helper}</span>}
    </label>
  );
}

export function Checkbox({ checked, onChange, label, indeterminate }) {
  const state = indeterminate ? 'ind' : checked ? 'on' : '';
  return (
    <label className="check">
      <span className={`cbx ${state}`} onClick={() => onChange && onChange(!checked)}>
        {checked && !indeterminate && <Icon name="check" size={12} color="#fff" />}
        {indeterminate && <span className="ind-bar" />}
      </span>
      {label && <span className="check-lbl">{label}</span>}
    </label>
  );
}

export function Radio({ checked, onChange, label, name }) {
  return (
    <label className="radio">
      <span className={`rad ${checked ? 'on' : ''}`} onClick={() => onChange && onChange()} />
      {label && <span className="check-lbl">{label}</span>}
    </label>
  );
}

export function Toggle({ on, onChange, label }) {
  return (
    <label className="toggle">
      <span className={`tg ${on ? 'on' : ''}`} onClick={() => onChange && onChange(!on)} />
      {label && <span className="check-lbl">{label}</span>}
    </label>
  );
}

export function Tag({ tone = 'blue', children, onDismiss }) {
  return (
    <span className={`tag tag-${tone}`}>
      {children}
      {onDismiss && (
        <button className="tag-x" onClick={onDismiss} aria-label="Remove">
          <Icon name="close" size={12} />
        </button>
      )}
    </span>
  );
}

export function Avatar({ name = 'AD', size = 'md' }) {
  return <span className={`avatar avatar-${size}`}>{name}</span>;
}

export function Card({ title, action, children }) {
  return (
    <section className="card">
      {title && (
        <div className="card-head">
          <h3>{title}</h3>
          {action}
        </div>
      )}
      <div className="card-body">{children}</div>
    </section>
  );
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = i === open;
        return (
          <div key={i} className={`acc-item ${isOpen ? 'open' : ''}`}>
            <button className="acc-head" onClick={() => setOpen(isOpen ? -1 : i)}>
              <span>{it.title}</span>
              <span className={`acc-chev ${isOpen ? 'open' : ''}`}>
                <Icon name="chevron-down" size={16} color="var(--ads-icon-muted)" />
              </span>
            </button>
            {isOpen && <div className="acc-body">{it.body}</div>}
          </div>
        );
      })}
    </div>
  );
}

export function Tabs({ tabs, active, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button key={t} className={`tab ${t === active ? 'active' : ''}`} onClick={() => onChange(t)}>
          {t}
        </button>
      ))}
    </div>
  );
}

export function ProgressBar({ value = 0, max = 100, tone = 'blue', label, hint }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="progress">
      {label && <div className="progress-lbl">{label}</div>}
      <div className={`progress-track tone-${tone}`}>
        <i style={{ width: `${pct}%` }} />
      </div>
      {hint && <div className={`progress-hint tone-${tone}`}>{hint}</div>}
    </div>
  );
}

export function Notification({ tone = 'info', title, body, onClose }) {
  return (
    <div className={`toast toast-${tone}`}>
      <span className="toast-icon">{tone === 'success' ? '\u2713' : tone === 'error' ? '!' : tone === 'warning' ? '!' : 'i'}</span>
      <div className="toast-body">
        <span className="toast-title">{title}</span>{' '}
        <span className="toast-text">{body}</span>
      </div>
      {onClose && <button className="toast-close" onClick={onClose}><Icon name="close" size={14} color="var(--ads-icon-muted)" /></button>}
    </div>
  );
}

export function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;
  return (
    <div className="modal-root">
      <div className="modal-scrim" onClick={onClose} />
      <div className="modal">
        <div className="modal-head">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}><Icon name="close" size={16} color="var(--ads-icon-muted)" /></button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-foot">{footer}</div>}
      </div>
    </div>
  );
}

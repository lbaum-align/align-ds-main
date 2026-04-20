import { useState } from 'react';
import { Button, TextField, Radio, Toggle, Card } from '../components';
import { Icon } from '../components/Icon';

export function NewRequestForm({ onCancel, onSubmit }) {
  const [type, setType] = useState('feature');
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [notify, setNotify] = useState(true);
  const [desc, setDesc] = useState('');
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

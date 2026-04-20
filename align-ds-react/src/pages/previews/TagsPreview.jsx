import { Tag } from '../../components/Kit';

export function TagsPreview() {
  return (
    <div className="pv-page">
      <div className="pv-h" style={{marginBottom:6}}>Tags</div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:20}}>
        <Tag tone="blue">Blue</Tag>
        <Tag tone="green">Green</Tag>
        <Tag tone="red">Red</Tag>
        <Tag tone="orange">Orange</Tag>
        <Tag tone="purple">Purple</Tag>
        <Tag tone="magenta">Magenta</Tag>
      </div>
      <div className="pv-h" style={{marginBottom:6}}>Dismissible</div>
      <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
        <Tag tone="blue" onDismiss={() => {}}>In treatment</Tag>
        <Tag tone="green" onDismiss={() => {}}>Approved</Tag>
        <Tag tone="red" onDismiss={() => {}}>Rejected</Tag>
      </div>
    </div>
  );
}

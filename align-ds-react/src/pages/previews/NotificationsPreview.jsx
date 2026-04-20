import { Notification } from '../../components/Kit';

export function NotificationsPreview() {
  return (
    <div className="pv-page pv-page-dim">
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        <Notification tone="success" title="Scan uploaded:" body="patient file ready for review." onClose={() => {}} />
        <Notification tone="error" title="Submission failed:" body="check your connection and retry." onClose={() => {}} />
        <Notification tone="warning" title="Expiring soon:" body="treatment plan needs review before Friday." onClose={() => {}} />
        <Notification tone="info" title="New release:" body="v0.9.1 is now available in the library." onClose={() => {}} />
      </div>
    </div>
  );
}

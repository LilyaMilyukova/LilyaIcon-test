import { Icon } from './Icon';

export default function App() {
  return (
    <div className="flex items-center gap-6 p-10">
      <Icon name="House" size="sm" color="primary" />
      <Icon name="House" size="xl" color="muted" />
      <Icon name="House" customSize={40} color="error" />
      <Icon name="House" size="sm" customSize={40} color="success" />
    </div>
  );
}

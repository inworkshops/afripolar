import { WORKSHOPS } from './workshops';
import WorkshopDetail from './WorkshopDetail';

export default function App() {
  return <WorkshopDetail workshop={WORKSHOPS.find(w => w.id === 'indaba-2026')} />;
}

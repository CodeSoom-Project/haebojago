import { Route, Routes } from 'react-router-dom';

import MissionList from './pages/MissionList';
import MissionWrite from './pages/MissionWrite';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MissionList />} />
        <Route path="/writemission" element={<MissionWrite />} />
      </Routes>
    </div>
  );
}

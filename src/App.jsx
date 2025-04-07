import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Fees from './components/Fees/Fees';
import Notices from './pages/Notices';
import Examinations from './pages/Examinations';
import Placements from './pages/Placements';
import Library from './pages/Library';
import InternationalOpportunities from './pages/InternationalOpportunities';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="fees" element={<Fees />} />
          <Route path="notices" element={<Notices />} />
          <Route path="examinations" element={<Examinations />} />
          <Route path="placements" element={<Placements />} />
          <Route path="library" element={<Library />} />
          <Route path="international" element={<InternationalOpportunities />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
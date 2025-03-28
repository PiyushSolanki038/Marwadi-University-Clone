import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Fees from './components/Fees/Fees';
import EContent from './components/EContent/EContent';
import Academic from './components/Academic/Academic';
import { AuthProvider, useAuth } from './context/AuthContext';
import Exam from './components/Exam/Exam';
import TimeTable from './components/TimeTable/TimeTable';
import OnlineClass from './components/TimeTable/OnlineClass';
import CurrentWeekTimeTable from './components/TimeTable/CurrentWeekTimeTable';
import DateWiseTimeTable from './components/TimeTable/DateWiseTimeTable';

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/fees" element={<ProtectedRoute><Fees /></ProtectedRoute>} />
          <Route path="/econtent" element={<ProtectedRoute><EContent /></ProtectedRoute>} />
          <Route path="/academic" element={<ProtectedRoute><Academic /></ProtectedRoute>} />
          <Route path="/exam" element={<ProtectedRoute><Exam /></ProtectedRoute>} />
          <Route path="/current-week-timetable" element={<ProtectedRoute><CurrentWeekTimeTable /></ProtectedRoute>} />
          <Route path="/date-wise-timetable" element={<ProtectedRoute><DateWiseTimeTable /></ProtectedRoute>} />
          <Route path="/online-class" element={<ProtectedRoute><OnlineClass /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import './App.css';
import { default as DiscussDesign } from './components/discuss/InputDesign';
import { default as LoginDesign } from './components/login/InputDesign';
import FindAndSeekApp from './components/home/FindAndSeekApp';
import ResourcesPage from './components/resource/ResourcesPage';
import RegistrationPage from './components/register/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPorter from './components/dashboard/DashboardPorter';
import UpcomingEventsColeman from './components/calender/UpcomingEventsColeman';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<FindAndSeekApp />} />
            <Route path="/home" element={<DashboardPorter />} />
            <Route path="/login" element={<LoginDesign />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/discuss" element={<DiscussDesign />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/dashboard" element={<DashboardPorter />} />
            <Route path="/calendar" element={<UpcomingEventsColeman />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

import './App.css';
import { default as DiscussDesign } from './components/discuss/InputDesign';
import { default as LoginDesign } from './components/login/InputDesign';
import FindAndSeekApp from './components/home/FindAndSeekApp';
import ResourcesPage from './components/resource/ResourcesPage';
import RegistrationPage from './components/register/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPorter from './components/dashboard/DashboardPorter';
import UpcomingEventsColeman from './components/calender/UpcomingEventsColeman';

function App() {
  return (
    <>
      {/* TODO: Routing */}
      <Router>
        <Routes>
          <Route path="/" element={<FindAndSeekApp />} />
          <Route path="/home" element={<DashboardPorter />} />
          <Route path="/login" element={<LoginDesign />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/discuss" element={<DiscussDesign />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/dashboard" element={<DashboardPorter />} />
          {/* TODO: add routing for calendar when it gets fixed */}
          <Route path="/calendar" element={<UpcomingEventsColeman />} />
          {/* TODO: add routing for profile when it gets written */}
          {/* <Route path="/profile" element={<ResourcesPage />} /> */}
        </Routes>
      </Router>

      {/* 
      DISCUSS: 
      Checked and good 
      - BottomNavigation.tsx needs updates for routing
      */}
      {/* <DiscussDesign /> */}

      {/* 
      HOME 
      Checked and meh
      - Is Mobile screen instead of browser view - looks weird
      */}
      {/* <FindAndSeekApp /> */}

      {/* 
      LOGIN
      Checked and meh
      - Is Mobile screen instead of browser view - looks weird
       */}
      {/* <LoginDesign /> */}

      {/* 
      REGISTER
      Checked and meh
      - Is Mobile screen instead of browser view - looks all kinds of messed up
       */}

      {/* 
      RESOURCE 
      Checked and meh
      - Is Mobile screen instead of browser view - looks weird
      */}
    </>
  );
}

export default App;

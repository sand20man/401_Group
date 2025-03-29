'use client';
import { useState } from 'react';
import BottomNavigation from '../navbar/BottomNavigation';
import styles from './DashboardPorter.module.css';

function TryDashboard() {
  // State to track which page is currently active
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the appropriate page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <TryDashboard />;
      default:
        return <TryDashboard />;
    }
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-sections">
          <div onClick={() => setCurrentPage('home')}>Home</div>
        </div>

        <div className="content-area">{renderPage()}</div>
      </div>
      <BottomNavigation />
    </>
  );
}

export default TryDashboard;

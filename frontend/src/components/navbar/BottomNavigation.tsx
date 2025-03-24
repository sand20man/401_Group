import React from 'react';
import styles from './BottomNavigation.module.css';
import { useNavigate } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <nav className={styles.navigationBar}>
        <div className={styles.navIcons}>
          <button aria-label="Calendar" onClick={() => navigate('/calendar')}>
            <i className={`ti ti-calendar ${styles.navIcon}`} />
          </button>
          <button aria-label="Book" onClick={() => navigate('/resources')}>
            <i className={`ti ti-book ${styles.navIcon}`} />
          </button>
          <button aria-label="Home" onClick={() => navigate('/dashboard')}>
            <i className={`ti ti-home ${styles.navIcon}`} />
          </button>
          <button aria-label="Messages" onClick={() => navigate('/discuss')}>
            <i className={`ti ti-messages ${styles.navIcon}`} />
          </button>
          <button aria-label="Profile" onClick={() => navigate('/')}>
            <i className={`ti ti-user ${styles.navIcon}`} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default BottomNavigation;

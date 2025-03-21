'use client';
import React from 'react';
import styles from './InputDesign.module.css';

const BottomNavigation: React.FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navIcons}>
        <button aria-label="Calendar">
          <i className={`ti ti-calendar ${styles.navIcon}`} />
        </button>
        <button aria-label="Book">
          <i className={`ti ti-book ${styles.navIcon}`} />
        </button>
        <button aria-label="Home">
          <i className={`ti ti-home ${styles.navIcon}`} />
        </button>
        <button aria-label="Messages">
          <i className={`ti ti-messages ${styles.navIcon}`} />
        </button>
        <button aria-label="Profile">
          <i className={`ti ti-user ${styles.navIcon}`} />
        </button>
      </div>
    </nav>
  );
};

export default BottomNavigation;

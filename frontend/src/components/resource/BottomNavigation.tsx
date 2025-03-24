import React from 'react';
import styles from './components.module.css';

export const BottomNavigation: React.FC = () => {
  return (
    <nav className={styles.bottomNav}>
      <div className={styles.navContent}>
        <button className={styles.navItem}>
          <i className={styles.navIcon} aria-label="Calendar" />
        </button>
        <button className={styles.navItem}>
          <i className={styles.navIcon} aria-label="Book" />
        </button>
        <button className={styles.navItem}>
          <i className={styles.navIcon} aria-label="Home" />
        </button>
        <button className={styles.navItem}>
          <i className={styles.navIcon} aria-label="Messages" />
        </button>
        <button className={styles.navItem}>
          <i className={styles.navIcon} aria-label="User Profile" />
        </button>
      </div>
    </nav>
  );
};
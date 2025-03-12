'use client';
import React from 'react';
import styles from './InputDesign.module.css';

const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBar}>
      <time className={styles.statusTime}>9:41</time>
      <div className={styles.statusIcons}>
        <i className={`ti ti-signal ${styles.statusIcon}`} />
        <i className={`ti ti-wifi ${styles.statusIcon}`} />
        <i className={`ti ti-battery ${styles.statusIcon}`} />
      </div>
    </header>
  );
};

export default StatusBar;

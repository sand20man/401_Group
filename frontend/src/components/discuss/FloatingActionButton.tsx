'use client';
import React from 'react';
import styles from './InputDesign.module.css';

const FloatingActionButton: React.FC = () => {
  return (
    <div className={styles.fabContainer}>
      <button className={styles.fabButton} aria-label="Add new post">
        <i className={`ti ti-plus ${styles.fabIcon}`} />
      </button>
    </div>
  );
};

export default FloatingActionButton;

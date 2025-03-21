import React from 'react';
import styles from './BackButton.module.css';

const BackButton: React.FC = () => {
  return (
    <button className={styles.backButton}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
          fill="white"
        />
      </svg>
      <span className={styles.backText}>BACK TO HOME</span>
    </button>
  );
};

export default BackButton;

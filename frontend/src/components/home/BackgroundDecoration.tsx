import React from 'react';
import styles from './BackgroundDecoration.module.css';

const BackgroundDecoration: React.FC = () => {
  return (
    <div className={styles.decorationContainer}>
      <svg
        width="369"
        height="474"
        viewBox="0 0 369 474"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.decorationSvg}
      >
        <path
          d="M-6.194 153.179L254.529 320.596L-9.26774 468.398L-6.194 153.179Z"
          fill="#3B96B7"
        />
        <path
          d="M-42.1053 482.83L248.534 379.686L265.462 482.259L-42.1053 482.83Z"
          fill="#3B96B7"
        />
        <path
          d="M-6.02444 117.472L254.698 284.889L-9.09818 432.69L-6.02444 117.472Z"
          fill="#41A1C0"
        />
        <path
          d="M-24.8029 86.7757L235.92 254.192L-27.8766 401.994L-24.8029 86.7757Z"
          fill="#49B2CD"
        />
        <path
          d="M-12.5672 496.052L278.073 392.908L295 495.481L-12.5672 496.052Z"
          fill="#41A1C0"
        />
        <path
          d="M17.1962 520.679L307.836 417.535L324.763 520.108L17.1962 520.679Z"
          fill="#49B2CD"
        />
      </svg>
    </div>
  );
};

export default BackgroundDecoration;

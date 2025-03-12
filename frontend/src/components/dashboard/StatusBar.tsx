'use client';
import * as React from 'react';
import styles from './DashboardPorter.module.css';

export const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBarIPhone}>
      <div className={styles.frame}>
        <time className={styles.time}>9:41</time>
        <div className={styles.dynamicIslandspacer} />
        <div className={styles.levels}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb5b6a3bcb190f678bb260cad723148312e0098b12b7178f761f2fc2c500fbc8?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
            className={styles.img}
            alt="Signal strength indicator"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2059ba0712fe8abdf6f2cbc7b24a87faa10a41c8cda3626d1f12045c65e69d2d?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
            className={styles.img2}
            alt="Battery level indicator"
          />
        </div>
      </div>
    </header>
  );
};

'use client';
import React from 'react';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <section className={styles.mainContent}>
      <h1 className={styles.title}>Find & Seek</h1>
      <figure className={styles.imageContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dec7d9b82a611bfb5d38b44a9e7d1991b62de6c9"
          alt="Pastoral scene with figure and sheep"
          className={styles.mainImage}
        />
      </figure>
      <div className={styles.buttonContainer}>
        <button className={styles.actionButton}>Log In</button>
        <button className={styles.actionButton}>Register</button>
      </div>
    </section>
  );
};

export default MainContent;

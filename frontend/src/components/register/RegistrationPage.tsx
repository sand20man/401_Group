'use client';
import React from 'react';
import styles from './RegistrationPage.module.css';
import { RegistrationHeader } from './RegistrationHeader';
import { RegistrationForm } from './RegistrationForm';
import { BackgroundDecoration } from './BackgroundDecoration';

const RegistrationPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=SF+Pro:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.pageContainer}>
        <RegistrationHeader />

        <h1 className={styles.pageTitle}>Register</h1>

        <nav className={styles.navigation}>
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
          </button>
          <span className={styles.backText}>BACK TO HOME</span>
        </nav>

        <RegistrationForm />
        <BackgroundDecoration />
      </main>
    </>
  );
};

export default RegistrationPage;

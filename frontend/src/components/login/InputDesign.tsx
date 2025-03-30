'use client';

import React from 'react';
import styles from './InputDesign.module.css';
import BackButton from './BackButton';
import LoginForm from './LoginForm';
import BackgroundDecoration from './BackgroundDecoration';
import BottomNavigation from '../navbar/BottomNavigation';

const InputDesign: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.loginPage}>
        <section className={styles.mainContent}>
          <br />
          <br />
          <br />
          <h1 className={styles.pageTitle}>Login</h1>
          <BackButton />
          <br />
          <LoginForm />
        </section>

        <BackgroundDecoration />
      </main>
      <BottomNavigation />
    </>
  );
};

export default InputDesign;

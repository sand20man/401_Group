'use client';

import React from 'react';
import styles from './InputDesign.module.css';
import StatusBar from './StatusBar';
import BackButton from './BackButton';
import LoginForm from './LoginForm';
import BackgroundDecoration from './BackgroundDecoration';

const InputDesign: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.loginPage}>
        <StatusBar />

        <section className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Login</h1>
          <BackButton />
          <LoginForm />
        </section>

        <BackgroundDecoration />
      </main>
    </>
  );
};

export default InputDesign;

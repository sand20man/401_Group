'use client';
import React from 'react';
import styles from './FindAndSeekApp.module.css';
import StatusBar from './StatusBar';
import MainContent from './MainContent';
import BackgroundDecoration from './BackgroundDecoration';

function FindAndSeekApp() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.appContainer}>
        <StatusBar />
        <MainContent />
        <BackgroundDecoration />
      </main>
    </>
  );
}

export default FindAndSeekApp;

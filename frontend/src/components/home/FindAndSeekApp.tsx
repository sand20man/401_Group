'use client';
import styles from './FindAndSeekApp.module.css';
import MainContent from './MainContent';
import BackgroundDecoration from './BackgroundDecoration';
import BottomNavigation from '../navbar/BottomNavigation';

function FindAndSeekApp() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <main className={styles.appContainer}>
        <MainContent />
        <BackgroundDecoration />
      </main>
      <BottomNavigation />
    </>
  );
}

export default FindAndSeekApp;

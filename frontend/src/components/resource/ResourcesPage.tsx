'use client';
import BottomNavigation from '../navbar/BottomNavigation';
import styles from './components.module.css';
import { ResourceGrid } from './ResourceGrid';

function ResourcesPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <section className={styles.contentSection}>
          <h1 className={styles.pageTitle}>Resource Hub</h1>
          <ResourceGrid />
        </section>
      </main>
      <BottomNavigation />
    </>
  );
}

export default ResourcesPage;

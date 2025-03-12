'use client';
import * as React from 'react';
import styles from './components.module.css';
import { ResourceGrid } from './ResourceGrid';
import { BottomNavigation } from './BottomNavigation';

function ResourcesPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <section className={styles.contentSection}>
          <h1 className={styles.pageTitle}>Resources</h1>
          <ResourceGrid />
        </section>
        <BottomNavigation />
      </main>
    </>
  );
}

export default ResourcesPage;

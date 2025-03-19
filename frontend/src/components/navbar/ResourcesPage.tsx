'use client';
import * as React from 'react';
import styles from './styles/ResourcesPage.module.css';
import { ResourceGrid } from './ResourceGrid';
import { BottomNavigation } from './BottomNavigation';

export default function ResourcesPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>Resources</h1>
          <ResourceGrid />
        </div>
        <BottomNavigation />
      </main>
    </>
  );
}

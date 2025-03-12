'use client';
import * as React from 'react';
import styles from './DashboardPorter.module.css';
import { StatusBar } from './StatusBar';
import { DashboardSection } from './DashboardSection';
import { NavigationBar } from './NavigationBar';

function DashboardPorter() {
  return (
    <main className={styles.dashboardPorter}>
      <StatusBar />

      <h1 className={styles.dashboard}>Dashboard</h1>

      <article className={styles.div}>
        <DashboardSection
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ddeb77a079cc3d1eb99b9a6d01efccb22f28cd5ed0db05000b1b91cc5c93b96e?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
          title="Discussion Board"
          className={styles.div2}
        />

        <DashboardSection
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b0bfd4952f3421cd30a751098f5161303878438e4834ff278e9881fc30720ef2?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
          title="Calendar"
          className={styles.div4}
        />

        <DashboardSection
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6338e1452d1db94c0e2eb16b39ba79f2266edb7b3322d5fb22191a3b469124ef?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
          title="Resources"
          className={styles.div6}
        />
      </article>

      <NavigationBar />
    </main>
  );
}

export default DashboardPorter;

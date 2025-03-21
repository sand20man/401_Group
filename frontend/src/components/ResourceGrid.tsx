import React from 'react';
import styles from './styles/ResourceGrid.module.css';
import { ResourceCard } from './ResourceCard';

export function ResourceGrid() {
  const resources = [
    { title: 'Jesus Christ', multiline: true },
    { title: 'First Steps', multiline: true },
    { title: 'Definitions', multiline: true },
    { title: 'Similarities\nDifferences', multiline: true },
    { title: 'Questions &\nAnswers', multiline: true },
    { title: 'More Resources' },
  ];

  return (
    <section className={styles.resourceGrid}>
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          multiline={resource.multiline}
        />
      ))}
    </section>
  );
}

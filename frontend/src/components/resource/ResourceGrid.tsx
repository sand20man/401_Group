import React from 'react';
import styles from './components.module.css';
import { ResourceCard } from './ResourceCard';

export const ResourceGrid: React.FC = () => {
  return (
    <div className={styles.resourceGrid}>
      <ResourceCard title="Jesus Christ" type="simple" />
      <ResourceCard title="First Steps" type="simple" />
      <ResourceCard title="Definitions" type="simple" />
      <ResourceCard type="multiline" lines={['Similarities', 'Differences']} />
      <ResourceCard type="multiline" lines={['Questions &', 'Answers']} />
      <ResourceCard title="More Resources" type="simple" />
    </div>
  );
};

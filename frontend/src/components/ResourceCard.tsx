import React from 'react';
import styles from './styles/ResourceCard.module.css';

interface ResourceCardProps {
  title: string;
  multiline?: boolean;
}

export function ResourceCard({ title, multiline }: ResourceCardProps) {
  if (multiline) {
    const lines = title.split('\n');
    return (
      <button className={styles.resourceCardMultiline}>
        <div className={styles.cardContent}>
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              <span>{line}</span>
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </button>
    );
  }

  return <button className={styles.resourceCard}>{title}</button>;
}

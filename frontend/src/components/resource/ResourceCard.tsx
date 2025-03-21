import React from 'react';
import styles from './components.module.css';

interface ResourceCardProps {
  title?: string;
  type: 'simple' | 'multiline';
  lines?: string[];
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  lines,
}) => {
  if (type === 'simple') {
    return <article className={styles.resourceCard}>{title}</article>;
  }

  return (
    <article className={styles.resourceCardMultiline}>
      <div className={styles.cardContent}>
        {lines?.map((line, index) => (
          <React.Fragment key={index}>
            <span>{line}</span>
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </article>
  );
};

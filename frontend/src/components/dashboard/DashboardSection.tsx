import * as React from 'react';
import styles from './DashboardPorter.module.css';

interface DashboardSectionProps {
  imageUrl: string;
  title: string;
  className?: string;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  imageUrl,
  title,
  className,
}) => {
  return (
    <section className={className}>
      <img
        src={imageUrl}
        className={styles.img3}
        alt={`${title} section background`}
      />
      <h2>{title}</h2>
    </section>
  );
};

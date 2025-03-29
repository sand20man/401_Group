import React, { useState } from 'react';
import styles from './components.module.css';

type ResourceType = 'simple' | 'multiline' | string;
interface ResourceCardProps {
  title?: string;
  type: ResourceType;
  lines?: string[];
  description?: string;
  links?: string[];
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  lines,
  description,
  links,
}) => {
  console.log(`Type: ${type}`);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const renderFront = () => {
    if (type === 'simple') {
      return <div className={styles.cardFrontContent}>{title}</div>;
    }

    return (
      <div className={styles.cardFrontContent}>
        {lines?.map((line, index) => (
          <React.Fragment key={index}>
            <span>{line}</span>
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderBack = () => {
    if (!links || links.length === 0) {
      return (
        <div className={styles.cardBackContent}>
          {title || lines?.join(' ')}
        </div>
      );
    }

    return (
      <div className={styles.cardBackContent}>
        {description && <p className={styles.cardDescription}>{description}</p>}
        <ul className={styles.linksList}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} className={styles.resourceLink}>
                {new URL(link).hostname.replace('www.', '')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.flippableCardContainer} onClick={handleFlip}>
      <div
        className={`${styles.flippableCard} ${isFlipped ? styles.flipped : ''}`}
      >
        <div className={styles.flippableCardFront}>
          {type === 'simple' ? (
            <article className={styles.resourceCard}>{renderFront()}</article>
          ) : (
            <article className={styles.resourceCardMultiline}>
              <div className={styles.cardContent}>{renderFront()}</div>
            </article>
          )}
        </div>
        <div className={styles.flippableCardBack}>
          <article
            className={`${type === 'simple' ? styles.resourceCard : styles.resourceCardMultiline} ${styles.backCard}`}
          >
            {renderBack()}
          </article>
        </div>
      </div>
    </div>
  );
};

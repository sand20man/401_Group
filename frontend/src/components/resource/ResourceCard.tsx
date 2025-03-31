import React, { useState } from 'react';
import styles from './components.module.css';

type ResourceType = 'simple' | 'multiline' | string;
interface ResourceCardProps {
  title?: string;
  type: ResourceType;
  icon?: string;
  lines?: string[];
  description?: string;
  links?: string[];
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  icon,
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
    return (
      <div className={styles.cardFrontContent}>
        {icon && (
          <img src={icon} alt={title} className={styles.resourceIcon} />
        )}
        {type === 'simple'
          ? title
          : lines?.map((line, index) => (
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
      <div className={`${styles.flippableCard} ${isFlipped ? styles.flipped : ''}`}>
        <div className={styles.flippableCardFront}>
          <article className={type === 'simple' ? styles.resourceCard : styles.resourceCardMultiline}>
            {renderFront()}
          </article>
        </div>
        <div className={styles.flippableCardBack}>
          <article className={`${type === 'simple' ? styles.resourceCard : styles.resourceCardMultiline} ${styles.backCard}`}>
            {renderBack()}
          </article>
        </div>
      </div>
    </div>
  );
};

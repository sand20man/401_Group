'use client';
import React from 'react';
import styles from './InputDesign.module.css';

interface QuestionCardProps {
  author: string;
  content: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ author, content }) => {
  return (
    <article className={styles.questionCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.authorName}>{author}</h2>
        <i className={`ti ti-star ${styles.starIcon}`} />
      </div>
      <p className={styles.questionContent}>{content}</p>
      <div className={styles.actionButtons}>
        <button aria-label="Like">
          <i className={`ti ti-heart ${styles.starIcon}`} />
        </button>
        <button aria-label="Comment">
          <i className={`ti ti-message ${styles.starIcon}`} />
        </button>
      </div>
    </article>
  );
};

export default QuestionCard;

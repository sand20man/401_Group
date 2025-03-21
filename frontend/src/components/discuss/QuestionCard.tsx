'use client';
import React, { useState } from 'react';
import styles from './InputDesign.module.css';

interface QuestionCardProps {
  author: string;
  content: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ author, content }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className={styles.questionCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.authorName}>{author}</h2>
        <i className={`ti ti-star ${styles.starIcon}`} />
      </div>
      <p className={styles.questionContent}>{content}</p>
      <div className={styles.actionButtons}>
        <button
          aria-label="Like"
          onClick={toggleLike}
          className={styles.likeButton}
        >
          <i
            className={`ti ${isLiked ? 'ti-heart-filled' : 'ti-heart'} ${styles.heartIcon}`}
          />
        </button>
        <button aria-label="Comment">
          <i className={`ti ti-message ${styles.replyIcon}`} />
        </button>
      </div>
    </article>
  );
};

export default QuestionCard;

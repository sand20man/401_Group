'use client';
import React, { useState } from 'react';
import styles from './InputDesign.module.css';

interface QuestionCardProps {
  author: string;
  content: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ author, content }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  const toggleReply = () => {
    setIsReplying((prev) => !prev); // Toggles reply section
  };

  const handlePostReply = () => {
    setIsReplying(false);
    setReplyContent('');
  };

  return (
    <article className={styles.questionCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.authorName}>{author}</h2>
        <button
          aria-label="Favorite"
          onClick={toggleStar}
          className={styles.starButton}
        >
          <i
            className={`ti ${isStarred ? 'ti-star-filled' : 'ti-star'} ${styles.starIcon}`}
          />
        </button>
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
        <button aria-label="Comment" onClick={toggleReply}>
          <i className={`ti ti-message ${styles.replyIcon}`} />
        </button>
      </div>

      {/* Reply Section (Toggles on button click) */}
      {isReplying && (
        <div className={styles.replySection}>
          <textarea
            placeholder="Write your reply..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            rows={4}
            className={styles.replyTextarea}
          />
          <div className={styles.replyActions}>
            <button onClick={handlePostReply} className={styles.postButton}>
              Post
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default QuestionCard;

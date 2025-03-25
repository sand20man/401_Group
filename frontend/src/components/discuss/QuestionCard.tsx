'use client';
import React, { useState } from 'react';
import styles from './InputDesign.module.css';

interface QuestionCardProps {
  author: string;
  content: string;
  isStarred: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  author,
  content,
  isStarred,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isStarredState, setIsStarredState] = useState(isStarred);
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleStar = () => {
    setIsStarredState(!isStarredState);
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
            className={`ti ${isStarredState ? 'ti-star-filled' : 'ti-star'} ${styles.starIcon}`}
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

// 'use client';
// import React, { useState } from 'react';
// import styles from './InputDesign.module.css';

// interface QuestionCardProps {
//   postId: number;
//   author: string;
//   content: string;
//   isStarred: boolean; // This is determined by whether a "Star" record exists
//   refreshStarred: () => Promise<void>;
// }

// const LOGGED_IN_USER_ID = 1; // Replace with actual logged-in user ID

// const QuestionCard: React.FC<QuestionCardProps> = ({
//   postId,
//   author,
//   content,
//   isStarred,
//   refreshStarred,
// }) => {
//   const [isReplying, setIsReplying] = useState(false);
//   const [replyContent, setReplyContent] = useState('');

//   const toggleStar = async () => {
//     try {
//       const response = await fetch(
//         `https://localhost:5000/api/Post/toggle-star`,
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ userId: LOGGED_IN_USER_ID, postId }),
//         }
//       );

//       if (response.ok) {
//         await refreshStarred();
//       } else {
//         console.error('Failed to toggle star');
//       }
//     } catch (error) {
//       console.error('Error toggling star:', error);
//     }
//   };

//   const toggleReply = () => setIsReplying((prev) => !prev);

//   return (
//     <article className={styles.questionCard}>
//       <div className={styles.cardHeader}>
//         <h2 className={styles.authorName}>{author}</h2>
//         <button
//           aria-label="Favorite"
//           onClick={toggleStar}
//           className={styles.starButton}
//         >
//           <i
//             className={`ti ${isStarred ? 'ti-star-filled' : 'ti-star'} ${styles.starIcon}`}
//           />
//         </button>
//       </div>
//       <p className={styles.questionContent}>{content}</p>
//       <div className={styles.actionButtons}>
//         <button aria-label="Comment" onClick={toggleReply}>
//           <i className={`ti ti-message ${styles.replyIcon}`} />
//         </button>
//       </div>

//       {isReplying && (
//         <div className={styles.replySection}>
//           <textarea
//             placeholder="Write your reply..."
//             value={replyContent}
//             onChange={(e) => setReplyContent(e.target.value)}
//             rows={4}
//             className={styles.replyTextarea}
//           />
//           <div className={styles.replyActions}>
//             <button
//               onClick={() => setIsReplying(false)}
//               className={styles.postButton}
//             >
//               Post
//             </button>
//           </div>
//         </div>
//       )}
//     </article>
//   );
// };

// export default QuestionCard;

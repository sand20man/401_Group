'use client';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './InputDesign.module.css';

const FloatingActionButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => setIsPopupOpen((prev) => !prev);
  const closePopup = () => setIsPopupOpen(false);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPopupOpen]);

  // Handle form submission and redirect
  const handlePost = () => {
    console.log('Post submitted'); // You can replace this with API call
    window.location.href = '/discussion-board'; // Redirect to the discussion board
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className={styles.fabContainer}>
        <button className={styles.fabButton} onClick={togglePopup}>
          +
        </button>
      </div>

      {/* Popup (Centered) */}
      {isPopupOpen && (
        <div className={styles.popupOverlay}>
          <div ref={popupRef} className={styles.popupContent}>
            <h2 className={styles.popupTitle}>Create Post</h2>
            <textarea
              placeholder="What's on your mind?"
              rows={5}
              className={styles.popupTextarea}
            ></textarea>
            <div className={styles.popupActions}>
              <button onClick={closePopup} className={styles.cancelButton}>
                Cancel
              </button>
              <button onClick={handlePost} className={styles.postButton}>
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingActionButton;

// 'use client';
// import React, { useState, useRef, useEffect } from 'react';
// import styles from './InputDesign.module.css';

// interface FloatingActionButtonProps {
//   refreshPosts: () => void;
// }

// const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
//   refreshPosts,
// }) => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [postContent, setPostContent] = useState('');
//   const popupRef = useRef<HTMLDivElement>(null);

//   const togglePopup = () => setIsPopupOpen((prev) => !prev);
//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setPostContent('');
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         popupRef.current &&
//         !popupRef.current.contains(event.target as Node)
//       ) {
//         closePopup();
//       }
//     };

//     if (isPopupOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isPopupOpen]);

//   const handlePost = async () => {
//     if (!postContent.trim()) return;

//     try {
//       await fetch('https://localhost:5000/api/Post', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           userId: 1, // Replace with actual logged-in user ID
//           postContent,
//         }),
//       });

//       refreshPosts();
//       closePopup();
//     } catch (error) {
//       console.error('Error submitting post:', error);
//     }
//   };

//   return (
//     <>
//       <div className={styles.fabContainer}>
//         <button className={styles.fabButton} onClick={togglePopup}>
//           +
//         </button>
//       </div>

//       {isPopupOpen && (
//         <div className={styles.popupOverlay}>
//           <div ref={popupRef} className={styles.popupContent}>
//             <h2 className={styles.popupTitle}>Create Post</h2>
//             <textarea
//               placeholder="What's on your mind?"
//               rows={5}
//               className={styles.popupTextarea}
//               value={postContent}
//               onChange={(e) => setPostContent(e.target.value)}
//             ></textarea>
//             <div className={styles.popupActions}>
//               <button onClick={closePopup} className={styles.cancelButton}>
//                 Cancel
//               </button>
//               <button onClick={handlePost} className={styles.postButton}>
//                 Post
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FloatingActionButton;

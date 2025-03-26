'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './InputDesign.module.css';

const FloatingActionButton: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState(''); // State for the user's name
  const [postContent, setPostContent] = useState(''); // State for post content
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

  // Handle form submission
  const handlePost = async () => {
    if (!name.trim() || !postContent.trim()) {
      alert('Please enter both a name and post content.');
      return;
    }

    const newPost = {
      posterName: name,
      postContent: postContent,
    };

    try {
      const response = await fetch('https://localhost:5000/api/Post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData || 'Failed to submit post.');
      }

      console.log('Post submitted successfully!');
      setName(''); // Clear input
      setPostContent(''); // Clear textarea
      closePopup(); // Close popup
      window.location.reload(); // Refresh posts list
    } catch (error) {
      console.error('Error submitting post:', error);
    }
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

            {/* Name Input Field */}
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.popupInput} // You might need to style this
            />

            {/* Post Content Textarea */}
            <textarea
              placeholder="What's on your mind?"
              rows={5}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
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

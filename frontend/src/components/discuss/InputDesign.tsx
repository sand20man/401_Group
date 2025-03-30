'use client';
import styles from './InputDesign.module.css';
import QuestionCard from './QuestionCard';
import FloatingActionButton from './FloatingActionButton';
import BottomNavigation from '../navbar/BottomNavigation';
import { useEffect, useState } from 'react';
import { Post } from '../../types/Post';

function InputDesign() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showStarred, setShowStarred] = useState(false);

  const toggleStarred = () => {
    setShowStarred((prev) => !prev);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://localhost:5000/api/Post');
      const data = await response.json();
      setPosts(Array.isArray(data) ? data : data.posts || []);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className={styles.container}>
        <section className={styles.contentSection}>
          <h1 className={styles.pageTitle}>What's on your Mind?</h1>
          <div className={styles.toggleButtonContainer}>
            {/* <button onClick={toggleStarred} className={styles.toggleButton}>
              {showStarred ? 'Show All Posts' : 'Show Starred Posts'}
            </button> */}
            <FloatingActionButton />
          </div>
          <br />
          <div className={styles.questionsFeed}>
            {posts.map((post) => (
              <QuestionCard
                key={post.postId}
                author={`${post.user.firstName} ${post.user.lastName}`}
                content={post.postContent}
                isStarred={false}
              />
            ))}
          </div>
        </section>
        <BottomNavigation />
      </main>
    </>
  );
}

export default InputDesign;

// 'use client';
// import { useState, useEffect } from 'react';
// import styles from './InputDesign.module.css';
// import QuestionCard from './QuestionCard';
// import FloatingActionButton from './FloatingActionButton';
// import BottomNavigation from '../navbar/BottomNavigation';

// const LOGGED_IN_USER_ID = 1; // Replace with actual logged-in user ID

// interface Post {
//   postId: number;
//   author: string;
//   content: string;
//   isStarred: boolean;
// }

// export default function InputDesign() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [isStarredView, setIsStarredView] = useState(false); // State for toggling view

//   const fetchPosts = async (onlyStarred: boolean = false) => {
//     try {
//       const url = onlyStarred
//         ? `https://localhost:5000/api/Post/get-all?userId=${LOGGED_IN_USER_ID}&starred=true`
//         : `https://localhost:5000/api/Post/get-all?userId=${LOGGED_IN_USER_ID}`;
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setPosts(data);
//       } else {
//         console.error('Failed to fetch posts');
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const toggleStarredView = () => {
//     setIsStarredView(!isStarredView); // Toggle the view
//     fetchPosts(!isStarredView); // fetch either starred or all posts based on the toggle
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <link
//         rel="stylesheet"
//         href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
//       />
//       <main className={styles.container}>
//         <section className={styles.contentSection}>
//           <h1 className={styles.pageTitle}>What's on your mind?</h1>
//           <button onClick={toggleStarredView}>
//             {isStarredView ? 'Show All Posts' : 'Show Starred Posts'}
//           </button>
//           <div className={styles.questionsFeed}>
//             {posts.map((post) => (
//               <QuestionCard
//                 key={post.postId}
//                 postId={post.postId}
//                 author={post.author}
//                 content={post.content}
//                 isStarred={post.isStarred}
//                 refreshStarred={() => fetchPosts(isStarredView)}
//               />
//             ))}
//           </div>
//         </section>
//         <BottomNavigation />
//         <FloatingActionButton refreshPosts={fetchPosts} />
//       </main>
//     </>
//   );
// }

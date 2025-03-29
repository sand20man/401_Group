'use client';
import styles from './InputDesign.module.css';
import QuestionCard from './QuestionCard';
import FloatingActionButton from './FloatingActionButton';
import BottomNavigation from '../navbar/BottomNavigation';
import { useEffect, useState } from 'react';
import { Post } from '../../types/Post';

function InputDesign() {
  const [posts, setPosts] = useState<Post[]>([]);

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
          <h1 className={styles.pageTitle}>What's on your mind?</h1>
          <div className={styles.questionsFeed}>
            {posts.map((post) => (
              <QuestionCard
                key={post.postId}
                author={post.posterName}
                content={post.postContent}
              />
            ))}
          </div>
        </section>
        <BottomNavigation />
        <FloatingActionButton />
      </main>
    </>
  );
}

export default InputDesign;

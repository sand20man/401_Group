'use client';
import styles from './InputDesign.module.css';
import QuestionCard from './QuestionCard';
import FloatingActionButton from './FloatingActionButton';
import BottomNavigation from '../navbar/BottomNavigation';

function InputDesign() {
  const questions = [
    {
      author: 'Sarah C.',
      content:
        'I am new to the church and I am going to the temple to do baptisms for the first time soon. How can I prepare?',
    },
    {
      author: 'Russell N.',
      content: 'What are some ways you all have found to "Think Celestial"?',
    },
    {
      author: 'John R.',
      content:
        "Any tips on how to beat the 4th ward's basketball team? Game next week",
    },
    {
      author: 'Elizabeth O.',
      content: "What's your favorite way to study the scriptures?",
    },
    {
      author: 'Anonymous',
      content: "How can I feel the Holy Ghost when I'm feeling sad?",
    },
  ];

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
            {questions.map((question, index) => (
              <QuestionCard
                key={index}
                author={question.author}
                content={question.content}
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

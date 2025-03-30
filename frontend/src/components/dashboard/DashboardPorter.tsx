'use client';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../navbar/BottomNavigation';
import styles from './DashboardPorter.module.css';
import { DashboardSection } from './DashboardSection';

function DashboardPorter() {
  const navigate = useNavigate();

  return (
    <>
      <main className={styles.dashboardPorter}>
        <h1>Welcome, Laura</h1>

        <article>
          <div
            onClick={() => navigate('/discuss')}
            style={{ cursor: 'pointer' }}
          >
            <DashboardSection
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ddeb77a079cc3d1eb99b9a6d01efccb22f28cd5ed0db05000b1b91cc5c93b96e?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
              title="Discussion Board"
              className={styles.div}
            />
          </div>
          <div
            onClick={() => navigate('/calendar')}
            style={{ cursor: 'pointer' }}
          >
            <br />
            <br />
            <DashboardSection
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b0bfd4952f3421cd30a751098f5161303878438e4834ff278e9881fc30720ef2?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
              title="Calendar"
              className={styles.div}
            />
          </div>{' '}
          <div
            onClick={() => navigate('/resources')}
            style={{ cursor: 'pointer' }}
          >
            <br />
            <br />
            <DashboardSection
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/6338e1452d1db94c0e2eb16b39ba79f2266edb7b3322d5fb22191a3b469124ef?placeholderIfAbsent=true&apiKey=2bd317ef40774aafb8edbb2a35ba87d7"
              title="Resources"
              className={styles.div}
            />
          </div>
        </article>
      </main>
      <br />
      <br />
      <BottomNavigation />
      <br />
      <br />
      <br />
    </>
  );
}

export default DashboardPorter;

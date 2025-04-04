import React from 'react';
import styles from './components.module.css';
import { ResourceCard } from './ResourceCard';

export const ResourceGrid: React.FC = () => {
  const resourceData = [
    {
      title: 'Jesus Christ',
      type: 'simple',
      icon: '/Resources_Images/jesus.png',
      links: [
        'https://www.churchofjesuschrist.org/comeuntochrist/believe/jesus',
        'https://www.churchofjesuschrist.org/study/general-conference/topics/jesus-christ?lang=eng',
      ],
    },
    {
      title: 'First Steps',
      type: 'simple',
      description: 'For new members or those exploring the Church',
      icon: '/Resources_Images/firststeps.png',
      links: [
        'https://www.churchofjesuschrist.org/comeuntochrist',
        'https://www.churchofjesuschrist.org/study/manual/strengthening-new-and-returning-members/strengthening-new-and-returning-members?lang=eng',
      ],
    },
    {
      title: 'Definitions',
      type: 'simple',
      description: 'Gospel Topics',
      icon: '/Resources_Images/definitions.png',
      links: [
        'https://www.churchofjesuschrist.org/study/manual/gospel-topics?lang=eng',
      ],
    },
    {
      title: 'Similarities & Differences',
      type: 'simple',
      description: 'Comparisons between LDS beliefs and other faiths',
      icon: '/Resources_Images/similarities.png',
      links: [
        'https://www.churchofjesuschrist.org/study/ensign/2000/06?lang=eng',
        'https://www.churchofjesuschrist.org/comeuntochrist/believe',
      ],
    },
    {
      title: 'Questions & Answers',
      type: 'simple',
      description: 'FAQs and live chat',
      icon: '/Resources_Images/questions.png',
      links: ['https://faq.churchofjesuschrist.org/'],
    },
    {
      title: 'More Resources',
      type: 'simple',
      // No icon for "More Resources" at the moment
      links: [
        'https://www.churchofjesuschrist.org/?lang=eng',
        'https://www.churchofjesuschrist.org/pages/mobileapps/gospellibrary?lang=eng',
      ],
    },
  ];

  return (
    <div className={styles.resourceGrid}>
      {resourceData.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          type={resource.type}
          icon={resource.icon}
          description={resource.description}
          links={resource.links}
        />
      ))}
    </div>
  );
};

import React from 'react';
import ShowCard from '../cards/ShowCard';
import styles from '@/components/styles/module/Show.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function UpcomingShowsSection({ shows }) {
  const hasShows = shows && shows.length > 0;
  
  return (
    <div className={styles.showsContainer}>
      {hasShows ? (
        <div 
          className={`${styles.showsGrid} ${layoutStyles.cardGrid}`}
          style={{ '--card-min': '20rem' }}
        >
          {shows.map(show => (
            <ShowCard 
              key={show._id} 
              show={show}
            />
          ))}
        </div>
      ) : (
        <p className={`${styles.noShowsMessage} ${textStyles.normalTextSecondary}`}>
          No upcoming shows at the moment. Check back soon!
        </p>
      )}
    </div>
  );
}
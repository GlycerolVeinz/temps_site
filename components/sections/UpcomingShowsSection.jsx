import React from 'react';
import ShowItem from '@/components/items/ShowItem';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function UpcomingShowsSection({ shows }) {
  const hasShows = shows && shows.length > 0;

  return (
    <div className={styles.showsContainer}>
      {hasShows ? (
        <div className={styles.showsGrid}>
          {shows.map(show => (
            <ShowItem key={show._id} show={show} />
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

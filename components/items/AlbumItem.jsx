import React from 'react';
import styles from '@/components/styles/module/Music.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function AlbumItem({ ep }) {
  const epId = `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div id={epId} className={styles.musicCardContainer}>
      <div className={styles.musicImageGroup}>
        <div className={styles.musicImageContainer}>
          <img
            src={ep.cover}
            alt={`${ep.title} Cover`}
            className={styles.musicImage}
          />
        </div>
        <div className={styles.musicHoverOverlay}>
          <h4 className={textStyles.headerText}>Songs:</h4>
          <ul className={styles.musicSongsList}>
            {ep.songs.map((song, index) => (
              <li key={index} className={`${styles.musicSongItem} ${textStyles.normalText}`}>
                {song}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className={textStyles.headerText}>{ep.title}</h3>
    </div>
  );
}

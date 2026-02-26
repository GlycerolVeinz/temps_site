import React from 'react';
import { getEpId } from '@/lib/ids';
import styles from '@/components/styles/module/Music.module.css';
import textStyles from '@/components/styles/globals/text.module.css';


export default function MusicCard({ ep }) {
  const epId = getEpId(ep);

  return (
    <div className={styles.musicCardContainer} id={epId}>
      <div className={styles.musicImageGroup}>
        <div className={styles.musicImageContainer}>
          <img className={styles.musicImage}
            src={ep.coverUrl}
            alt={`${ep.title} Cover`}
          />
        </div>

        <div className={styles.musicHoverOverlay}>
          <h4 className={textStyles.headerText}>Songs:</h4>
          <ul className={styles.musicSongsList}>
            {ep.songs.map((song, index) => (
              <li className={`${styles.musicSongItem} ${textStyles.normalText}`} key={index}>{song}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className={textStyles.headerText}>{ep.title}</h3>
    </div>
  );
}
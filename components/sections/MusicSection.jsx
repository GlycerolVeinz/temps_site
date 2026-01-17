import React from 'react';
import AlbumItem from '@/components/items/AlbumItem';
import styles from '@/components/styles/module/Music.module.css';

export default function MusicSection({ music }) {
  return (
    <section className={styles.musicSectionContainer}>
      {music.map((ep) => (
        <AlbumItem key={ep.title} ep={ep} />
      ))}
    </section>
  );
}

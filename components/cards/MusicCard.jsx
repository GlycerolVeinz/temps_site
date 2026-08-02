import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import styles from '@/components/styles/module/Music.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function MusicCard({ ep }) {
  return (
    <Link href={`/music/${ep.slug}`} className={styles.musicCardLinkWrapper}>
      <div className={styles.musicCardContainer}>
        <div className={styles.musicImageGroup}>
          <div className={styles.musicImageContainer}>
            <Image className={styles.musicImage}
              src={ep.cover ? urlFor(ep.cover).width(400).auto('format').url() : (ep.coverUrl || '')}
              alt={`${ep.title} Cover`}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
        <h3 className={`${textStyles.headerText} ${styles.musicTitle}`}>{ep.title}</h3>
      </div>
    </Link>
  );
}
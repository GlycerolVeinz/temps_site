import React from 'react';
import PlatformItem from '@/components/items/PlatformItem';
import styles from '@/components/styles/module/Platform.module.css';

export default function PlatformsSection({ links }) {
  return (
    <section className={styles.platformContainer}>
      {links.map((link) => (
        <PlatformItem
          key={link.id}
          platform={link}
        />
      ))}
    </section>
  );
}

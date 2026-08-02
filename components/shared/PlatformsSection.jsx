'use client';

import React from "react";
import PlatformCard from "@/components/cards/PlatformCard";
import styles from '@/components/styles/module/Platform.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';

export default function PlatformsSection({ links }) {
  return (
    <section 
      className={`${styles.platformContainer} ${layoutStyles.cardGrid}`}
      style={{ '--card-min': '20rem' }}
    >
        {links.map(link => (

          <PlatformCard
            key={link._id}
            platform={link}
          />
        ))}
    </section>
  );
}
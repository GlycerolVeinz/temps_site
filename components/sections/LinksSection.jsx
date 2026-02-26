import React from "react";
import PlatformCard from "@/components/cards/PlatformCard";
import styles from '@/components/styles/module/Platform.module.css';

export default function PlatformsSection({ links, onCopy, copiedLink }) {
  return (
    <section className={styles.platformContainer}>
        {links.map(link => (
          <PlatformCard
            key={link.id}
            platform={link}
            onCopy={onCopy}
            copiedLink={copiedLink}
          />
        ))}
    </section>
  );
}
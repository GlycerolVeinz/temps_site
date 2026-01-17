import React from 'react';
import CopyButton from '@/components/interactive/CopyButton';
import styles from '@/components/styles/module/Platform.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function PlatformItem({ platform }) {
  return (
    <div id={platform.id} className={styles.platformCardContainer}>
      <div className={styles.platformHeader}>
        <h3 className={textStyles.headerText}>
          {platform.title}
        </h3>
        {platform.hasWrongAssociation && (
          <span className={styles.warningBadge}>
            <span className={textStyles.warningText}>⚠️ Name Clash</span>
          </span>
        )}
      </div>
      <div className={styles.platformContent}>
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={textStyles.linkText}
        >
          {platform.linkText}
        </a>
        <div className={styles.platformActions}>
          <CopyButton textToCopy={platform.url} />
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import styles from '@/components/styles/module/Platform.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';
import { copyToClipboard } from '@/lib/clipboard';


export default function PlatformCard({
  platform
}) {

  const handleCopy = (text) => copyToClipboard(text, setCopiedLink);
  const [copiedLink, setCopiedLink] = useState("");
    

  return (
    <div className={styles.platformCardContainer} id={platform.id}>
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
        <a className={textStyles.linkText}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {platform.linkText}
        </a>
        <div className={styles.platformActions}>
          <button className={`${buttonStyles.copyButton} ${textStyles.normalText}`} onClick={() => handleCopy(platform.url)}>
            <Copy size={16} />
          </button>
        </div>
      </div>
      {copiedLink === platform.url && (
        <div className={`${styles.copiedBadge} ${textStyles.copiedMessage}`}> Link copied! </div>
      )}
    </div>
  );
}
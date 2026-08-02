'use client';

import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import styles from '@/components/styles/module/Platform.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';
import { copyToClipboard } from '@/lib/clipboard';

export default function PlatformCard({ platform }) {
  const [copiedLink, setCopiedLink] = useState("");
  
  const handleCopy = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    copyToClipboard(text, setCopiedLink);
  };

  const warningId = `warning-${platform._id}`;
  let hostname = '';
  try {
    hostname = new URL(platform.url).hostname;
  } catch (e) {
    // ignore
  }

  return (
    <div className={styles.platformCardContainer} id={platform._id}>
      <div className={styles.platformHeader}>
        <div className={styles.platformTitleGroup}>
          {hostname ? (
            <img 
              src={`https://icons.duckduckgo.com/ip3/${hostname}.ico`} 
              alt={`${platform.title} icon`}
              width={32}
              height={32}
              loading="lazy"
              className={styles.platformIcon}
            />
          ) : (
            <div className={styles.platformIconFallback}>{platform.title.charAt(0)}</div>
          )}
          <h3 className={textStyles.headerText}>
            {platform.title}
          </h3>
        </div>
        {platform.hasWrongAssociation && (
          <span className={styles.warningBadge} aria-describedby={warningId}>
            <span className={textStyles.warningText}>⚠️ Name Clash</span>
          </span>
        )}
      </div>
      <div className={styles.platformContent}>
        <span className={textStyles.linkText} style={{ margin: 0 }}>
          {platform.linkText}
        </span>
        <div className={styles.platformActions}>
          <a 
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${buttonStyles.copyButton} ${styles.actionBtn}`}
            aria-label={`Visit ${platform.title}`}
          >
            <ExternalLink size={16} />
          </a>
          <button 
            className={`${buttonStyles.copyButton} ${styles.actionBtn}`} 
            onClick={(e) => handleCopy(e, platform.url)}
            aria-label={`Copy link for ${platform.title}`}
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div aria-live="polite">
        {copiedLink === platform.url && (
          <div className={`${styles.copiedBadge} ${textStyles.copiedMessage}`}>Link copied!</div>
        )}
      </div>
      
      {platform.hasWrongAssociation && (
        <div id={warningId} className={styles.srOnly}>
          This platform may mix our music with other artists using the same name.
        </div>
      )}
    </div>
  );
}
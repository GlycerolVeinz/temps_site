"use client";

import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import buttonStyles from '@/components/styles/globals/button.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import styles from '@/components/styles/module/Platform.module.css';

export default function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <>
      <button 
        onClick={handleCopy}
        className={`${buttonStyles.copyButton} ${textStyles.normalText}`}
      >
        <Copy size={16} />
      </button>
      {copied && (
        <div className={`${styles.copiedBadge} ${textStyles.copiedMessage}`}>
          Link copied!
        </div>
      )}
    </>
  );
}

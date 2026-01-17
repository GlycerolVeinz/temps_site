import React from 'react';
import styles from '@/components/styles/module/SectionTitle.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function SectionHeader({ title, id }) {
  return (
    <div id={id} className={styles.sectionTitleContainer}>
      <h2 className={textStyles.titleText}>
        {title}
      </h2>
    </div>
  );
}

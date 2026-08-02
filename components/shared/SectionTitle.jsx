import React from 'react';
import styles from '@/components/styles/module/SectionTitle.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function SectionTitle({ title, id }) {
  return (
    <div className={styles.sectionTitleContainer} id={id}>
      <h2 className={textStyles.titleText}>
        {title}
      </h2>
    </div>
  );
}
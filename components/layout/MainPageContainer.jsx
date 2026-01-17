import React from 'react';
import styles from '@/components/styles/module/Page.module.css';

export default function MainPageContainer({ children }) {
  return (
    <div className={styles.pageContainer}>
      {children}
    </div>
  );
}

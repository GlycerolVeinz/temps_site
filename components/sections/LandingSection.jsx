import React from 'react';
import { ENV } from '@/lib/config';
import styles from '@/components/styles/module/Page.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function LandingSection() {
  return (
    <section id="landing" className={styles.landingSection}>
      <div className={styles.backgroundImageWrapper}>
        <div 
          className={styles.backgroundImage}
          style={{ 
            backgroundImage: `url(${ENV.BACKGROUND_IMAGE_LANDSCAPE})`,
          }}
        />
      </div>
      <div className={styles.landingContent}>
        <h1 className={`${textStyles.bandNameText} band-name-font`}>Temporary</h1>
        <h1 className={`${textStyles.bandNameText} band-name-font`}>Friends</h1>
      </div>
    </section>
  );
}

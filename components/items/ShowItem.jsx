import React from 'react';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

const formatDate = (iso) => {
  if (!iso) return 'TBA';
  const d = new Date(iso);
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium'
  }).format(d);
};

const formatTime = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return new Intl.DateTimeFormat(undefined, {
    timeStyle: 'short'
  }).format(d);
};

export default function ShowItem({ show }) {
  return (
    <div className={styles.showCardContainer}>
      <div className={styles.showDateTime}>
        <p className={textStyles.headerText}>{formatDate(show.dateTime)}</p>
        <p className={textStyles.normalText}>{formatTime(show.dateTime)}</p>
      </div>
      <div className={styles.showHeader}>
        <div className={styles.showDetails}>
          <a
            href={show.showLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            title="View event details"
            className={textStyles.headerLinkText}
          >
            {show.showName}
          </a>
          <div>
            <a
              href={show.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Maps"
              className={textStyles.linkText}
            >
              {show.venueName}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.showActions}>
        {show.ticketLink ? (
          <a
            href={show.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonStyles.primaryButton} ${textStyles.normalText}`}
          >
            Get Tickets
          </a>
        ) : (
          <span className={`${styles.venueTicketsOnly} ${textStyles.normalText}`}>
            Tickets available at venue
          </span>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

export default function ShowCard({ show }) {

  return (
    <div className={styles.showCardContainer}>
      
      <div className={styles.showDateTime}>
        <p className={textStyles.headerText}>{new Date(show.dateTime).toDateString()}</p>
        <p className={textStyles.normalText}>{new Date(show.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
      </div>

      <div className={styles.showHeader}>
        <div className={styles.showDetails}>
          <a className={textStyles.headerLinkText}
            href={show.eventLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="View event details"
          >
            {show.eventName}
          </a>
          <div>
            <a className={textStyles.linkText}
              href={show.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Maps"
            >
              {show.location}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.showActions}>
        {show.ticketLink ? (
          <a className={`${buttonStyles.primaryButton} ${textStyles.normalText}`}
            href={show.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
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
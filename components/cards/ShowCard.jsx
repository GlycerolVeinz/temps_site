import React from 'react';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

export default function ShowCard({ show, copiedLink, onCopyMap }) {
  return (
    <div className={styles.showCardContainer}>
      <div className={styles.showDateTime}>
          <p className={textStyles.headerText}>{show.date}</p>
          <p className={textStyles.normalText}>{show.time}</p>
      </div>
      <div className={styles.showHeader}>
        <div className={styles.showDetails}>
          <a className={textStyles.headerLinkText}
            href={show.eventLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="View event details"
          >
            {show.venue}
          </a>
          <div>
            <a className={textStyles.linkText}
              href={show.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Maps"
            >
              {show.location}
            </a>
            {copiedLink === show.googleMapsUrl && (
              <span className={textStyles.copiedMessage}>Map link copied!</span>
            )}
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
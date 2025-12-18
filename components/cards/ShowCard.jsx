import React from 'react';
import styled from 'styled-components';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

const ShowCardContainer = styled.div.attrs({ className: styles.showCardContainer })``;
const ShowHeader = styled.div.attrs({ className: styles.showHeader })``;
const ShowDetails = styled.div.attrs({ className: styles.showDetails })``;
const EventLink = styled.a.attrs({ className: textStyles.headerLinkText })``;
const LocationLink = styled.a.attrs({ className: textStyles.linkText })``;
const ShowDateTime = styled.div.attrs({ className: styles.showDateTime })``;
const ShowDate = styled.p.attrs({ className: textStyles.headerText })``;
const ShowTime = styled.p.attrs({ className: textStyles.normalText })``;
const ShowActions = styled.div.attrs({ className: styles.showActions })``;
const TicketButton = styled.a.attrs({ className: `${buttonStyles.primaryButton} ${textStyles.normalText}` })``;
const VenueTicketsOnly = styled.span.attrs({ className: `${styles.venueTicketsOnly} ${textStyles.normalText}` })``;
const CopiedMessage = styled.span.attrs({ className: textStyles.copiedMessage })``;

const formatDate = (iso) => {
  if (!iso) return 'TBA';
  const d = new Date(iso);
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium'
  }).format(d);
} 

const formatTime = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return new Intl.DateTimeFormat(undefined, {
    timeStyle: 'short'
  }).format(d);
}

export default function ShowCard({ show }) {
  return (
    <ShowCardContainer>
      <ShowDateTime>
          <ShowDate>{formatDate(show.dateTime)}</ShowDate>
          <ShowTime>{formatTime(show.dateTime)}</ShowTime>
      </ShowDateTime>
      <ShowHeader>
        <ShowDetails>
          <EventLink
            href={show.showLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="View event details"
          >
            {show.showName}
          </EventLink>
          <div>
            <LocationLink
              href={show.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Maps"
            >
              {show.venueName}
            </LocationLink>
          </div>
        </ShowDetails>
        
      </ShowHeader>
      <ShowActions>
        {show.ticketLink ? (
          <TicketButton
            href={show.ticketLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Tickets
          </TicketButton>
        ) : (
          <VenueTicketsOnly>
          Tickets available at venue
          </VenueTicketsOnly>
        )}
      </ShowActions>
    </ShowCardContainer>
  );
}
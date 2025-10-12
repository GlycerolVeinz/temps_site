import React from 'react';
import { Copy } from 'lucide-react';
import styled from 'styled-components';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

const ShowCardContainer = styled.div.attrs({ className: styles.showCardContainer })``;
const ShowHeader = styled.div.attrs({ className: styles.showHeader })``;
const ShowDetails = styled.div.attrs({ className: styles.showDetails })``;
const VenueLink = styled.a.attrs({ className: textStyles.headerLinkText })``;
const LocationLink = styled.a.attrs({ className: textStyles.linkText })``;
const ShowDateTime = styled.div.attrs({ className: styles.showDateTime })``;
const ShowDate = styled.p.attrs({ className: textStyles.headerText })``;
const ShowTime = styled.p.attrs({ className: textStyles.normalText })``;
const ShowActions = styled.div.attrs({ className: styles.showActions })``;
const ShowMapActions = styled.div.attrs({ className: styles.showMapActions })``;
const TicketButton = styled.a.attrs({ className: `${buttonStyles.primaryButton} ${textStyles.normalText}` })``;
const VenueTicketsOnly = styled.span.attrs({ className: `${styles.venueTicketsOnly} ${textStyles.normalText}` })``;
const CopyButton = styled.button.attrs({ className: `${buttonStyles.copyButton} ${textStyles.normalText}` })``;
const CopiedMessage = styled.span.attrs({ className: textStyles.copiedMessage })``;

/**
 * Show Card Component
 * Displays information about an upcoming show with copy functionality
 */
export default function ShowCard({ show, copiedLink, onCopyMap }) {
  return (
    <ShowCardContainer>
      <ShowHeader>
        <ShowDetails>
          <VenueLink
            href={show.eventLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="View event details"
          >
            {show.venue}
          </VenueLink>
          <div>
            <LocationLink
              href={show.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Maps"
            >
              {show.location}
            </LocationLink>
            {copiedLink === show.googleMapsUrl && (
              <CopiedMessage>Map link copied!</CopiedMessage>
            )}
          </div>
        </ShowDetails>
        <ShowDateTime>
          <ShowDate>{show.date}</ShowDate>
          <ShowTime>{show.time}</ShowTime>
        </ShowDateTime>
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
            Tickets Available At Venue
          </VenueTicketsOnly>
        )}
      </ShowActions>
    </ShowCardContainer>
  );
}
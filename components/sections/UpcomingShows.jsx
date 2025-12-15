import React from 'react';
import styled from 'styled-components';
import ShowCard from '../cards/ShowCard';
import styles from '@/components/styles/module/Show.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

const ShowsContainer = styled.div.attrs({ className: styles.showsContainer })``;
const NoShowsMessage = styled.p.attrs({ className: `${styles.noShowsMessage} ${textStyles.normalTextSecondary}` })``;
const ShowsGrid = styled.div.attrs({ className: styles.showsGrid })``;

export default function UpcomingShowsSection({ shows }) {
  const hasShows = shows && shows.length > 0;
  
  return (
    <ShowsContainer>
      {hasShows ? (
        <ShowsGrid>
          {shows.map(show => (
            <ShowCard 
              key={show._id} 
              show={show}
            />
          ))}
        </ShowsGrid>
      ) : (
        <NoShowsMessage>
          No upcoming shows at the moment. Check back soon!
        </NoShowsMessage>
      )}
    </ShowsContainer>
  );
}
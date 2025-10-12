import React from 'react';
import styled from 'styled-components';
import styles from '@/components/styles/module/Music.module.css';

const MusicCardContainer = styled.div.attrs({ className: styles.musicCardContainer })``;
const MusicImageGroup = styled.div.attrs({ className: styles.musicImageGroup })``;
const MusicImageContainer = styled.div.attrs({ className: styles.musicImageContainer })``;
const MusicImage = styled.img.attrs({ className: styles.musicImage })``;
const MusicHoverOverlay = styled.div.attrs({ className: styles.musicHoverOverlay })``;
const MusicSongsTitle = styled.h4.attrs({ className: styles.musicSongsTitle })``;
const MusicSongsList = styled.ul.attrs({ className: styles.musicSongsList })``;
const MusicSongItem = styled.li.attrs({ className: styles.musicSongItem })``;
const MusicTitle = styled.h3.attrs({ className: styles.musicTitle })``;

/**
 * Music Card Component
 * Displays music cover and song list with square images
 */
export default function MusicCard({ ep }) {
  const epId = `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <MusicCardContainer id={epId}>
      <MusicImageGroup>
        <MusicImageContainer>
          <MusicImage
            src={ep.cover}
            alt={`${ep.title} Cover`}
          />
        </MusicImageContainer>

        <MusicHoverOverlay>
          <MusicSongsTitle>Songs:</MusicSongsTitle>
          <MusicSongsList>
            {ep.songs.map((song, index) => (
              <MusicSongItem key={index}>{song}</MusicSongItem>
            ))}
          </MusicSongsList>
        </MusicHoverOverlay>
      </MusicImageGroup>
      <MusicTitle>{ep.title}</MusicTitle>
    </MusicCardContainer>
  );
}
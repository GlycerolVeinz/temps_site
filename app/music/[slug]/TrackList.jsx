'use client';

import React, { useState, useRef } from 'react';
import Overlay from '@/components/shared/Overlay';
import styles from '@/components/styles/module/Music.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function TrackList({ songs }) {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const triggerRef = useRef(null);

    const handleOpen = (track, e) => {
        triggerRef.current = e.currentTarget;
        setSelectedTrack(track);
    };

    const handleClose = () => {
        setSelectedTrack(null);
        if (triggerRef.current) {
            triggerRef.current.focus();
        }
    };

    return (
        <>
            <ol className={styles.trackList}>
                {songs.map((song, index) => {
                    const trackTitle = typeof song === 'string' ? song : song.title;
                    const hasLyrics = typeof song !== 'string' && song.lyrics;
                    
                    return (
                        <li key={song._key || index} className={styles.trackListItem}>
                            {hasLyrics ? (
                                <button 
                                    className={styles.trackButton}
                                    onClick={(e) => handleOpen(song, e)}
                                    aria-label={`Read lyrics for ${trackTitle}`}
                                >
                                    <span className={textStyles.normalText}>{trackTitle}</span>
                                    <span className={styles.lyricsIndicator}>lyrics</span>
                                </button>
                            ) : (
                                <span className={textStyles.normalText}>{trackTitle}</span>
                            )}
                        </li>
                    );
                })}
            </ol>

            <Overlay isOpen={!!selectedTrack} onClose={handleClose}>
                {selectedTrack && (
                    <div className={styles.lyricsContainer}>
                        <h3 className={textStyles.titleText}>{selectedTrack.title}</h3>
                        <div className={styles.lyricsText}>
                            {selectedTrack.lyrics}
                        </div>
                    </div>
                )}
            </Overlay>
        </>
    );
}
import React from "react";
import MusicCard from "@/components/cards/MusicCard";
import styled from "styled-components";
import styles from '@/components/styles/module/Music.module.css';

const MusicSectionContainer = styled.section.attrs({ className: styles.musicSectionContainer })``;

export default function MusicSection({ music }) {
    return (
        <MusicSectionContainer>
            {music.map((ep) => (
                <MusicCard key={ep.title} ep={ep} />
            ))}
        </MusicSectionContainer>
    );
}

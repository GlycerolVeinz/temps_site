import React from "react";
import MusicCard from "@/components/cards/MusicCard";
import styles from '@/components/styles/module/Music.module.css';

export default function MusicSection({ music }) {
    
    return (
        <section className={styles.musicSectionContainer}>
            {music.map((ep) => (
                <MusicCard key={ep.title} ep={ep} /> // TODO change order of songs in split second
            ))}
        </section>
    );
}

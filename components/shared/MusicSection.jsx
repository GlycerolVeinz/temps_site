import React from "react";
import MusicCard from "@/components/cards/MusicCard";
import styles from '@/components/styles/module/Music.module.css';
import layoutStyles from '@/components/styles/globals/layout.module.css';

export default function MusicSection({ discography }) {

    return (
        <section 
            className={`${styles.musicSectionContainer} ${layoutStyles.cardGrid}`}
            style={{ '--card-min': '17rem' }}
        >
            {discography.map((ep) => (
                <MusicCard key={ep.title} ep={ep} />
            ))}
        </section>
    );
}

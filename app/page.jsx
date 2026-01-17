import React from 'react';
import axios from 'axios';
import { ENV, EPS } from '@/lib/config';
import MainPageContainer from '@/components/layout/MainPageContainer';
import Footer from '@/components/layout/Footer';
import LandingSection from '@/components/sections/LandingSection';
import SectionHeader from '@/components/items/SectionHeader';
import PlatformsSection from '@/components/sections/PlatformsSection';
import UpcomingShowsSection from '@/components/sections/UpcomingShowsSection';
import MusicSection from '@/components/sections/MusicSection';
import BandMembersSection from '@/components/sections/BandMembersSection';
import MenuButton from '@/components/interactive/MenuButton';
import styles from '@/components/styles/module/Page.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

const formatDate = (iso) => {
  if (!iso) return 'TBA';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(iso));
};

const formatTime = (iso) => {
  if (!iso) return '';
  return new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(new Date(iso));
};

async function getShows() {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/shows`, {
      headers: { 'Cache-Control': 'no-store' }
    });

    if (!data.success) return [];

    const now = new Date();
    return data.result
      .filter(show => show.dateTime && new Date(show.dateTime) >= now)
      .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
      .map(show => ({
        ...show,
        formattedDate: formatDate(show.dateTime),
        formattedTime: formatTime(show.dateTime),
      }));
  } catch (err) {
    console.error('Shows fetch failed:', err);
    return [];
  }
}

export default async function Home() {
  const shows = await getShows();

  return (
    <MainPageContainer>
      <MenuButton />

      <LandingSection />

      <section className={styles.contentContainer}>
        <SectionHeader id="streaming" title="Streaming Platforms" />
        <PlatformsSection links={ENV.PLATFORMS.streaming} />
        <p className={textStyles.noteText}>
          Note: Our music may be found on other platforms under different artist profiles.
        </p>

        <SectionHeader id="shows" title="Upcoming Shows" />
        <UpcomingShowsSection shows={shows} />

        <SectionHeader id="social" title="Social Media" />
        <PlatformsSection links={ENV.PLATFORMS.social} />

        <SectionHeader id="music" title="Our Music" />
        <MusicSection music={EPS} />

        <SectionHeader id="bandmates" title="Band Members" />
        <BandMembersSection members={ENV.BAND_MEMBERS} />

        <Footer bandName={ENV.BAND_NAME} />
      </section>
    </MainPageContainer>
  );
}

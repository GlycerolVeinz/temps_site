import React from 'react';
import { ENV, EPS } from '@/lib/config';
import { getUpcomingShows } from '@/lib/api/shows';
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

export default async function Home() {
  const shows = await getUpcomingShows();

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

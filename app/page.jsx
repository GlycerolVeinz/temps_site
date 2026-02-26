"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { ENV, EPS, SECTIONS } from '@/components/config';
import {
  PlatformsSection,
  BandMembersSection,
  UpcomingShowsSection,
  SectionTitle,
  NavigationMenu,
  MusicSection
} from '@/components/sections';
import textStyles from '@/components/styles/globals/text.module.css';
import pageStyles from '@/components/styles/module/Page.module.css';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  const [isPortrait, setIsPortrait] = useState(false);
  const landingRef = useRef(null);

  console.log("Background:", ENV.BACKGROUND_IMAGE);

  useEffect(() => {
    setMounted(true);

    if (typeof document !== 'undefined') {
      document.body.setAttribute('suppresshydrationwarning', 'true');
    }

    const checkOrientation = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const handleNavigate = (sectionId) => {
    if (sectionId === 'landing') {
      // Scroll to top for landing section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to specific section
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetPosition = element.offsetTop - 16;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMenuOpen(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedLink(text);
        setTimeout(() => setCopiedLink(""), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  // Return null during server-side rendering to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className={pageStyles.pageContainer}>
      <button className={pageStyles.menuToggleButton} onClick={() => setMenuOpen(true)}>
        <div className={pageStyles.menuToggleIcon}>
          {ENV.MENU_LOGO ? (
            <img className={pageStyles.menuToggleLogo}
              src={ENV.MENU_LOGO}
              alt="Menu"
            />
          ) : (
            <Menu size={24} className={pageStyles.menuToggleFallbackIcon} />
          )}
        </div>
      </button>

      <NavigationMenu
        sections={[
          { id: 'landing', title: 'Home' },
          ...SECTIONS
        ]}
        onNavigate={handleNavigate}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <section className={pageStyles.landingSection} id="landing" ref={landingRef}>
        <div className={pageStyles.backgroundImageWrapper}>
        <Image className={pageStyles.backgroundImage}
          src={isPortrait ? ENV.BACKGROUND_IMAGE_PORTRAIT : ENV.BACKGROUND_IMAGE_LANDSCAPE}
          layout="fill"
          objectFit="cover"
          alt="Band Background"
        />
        </div>
      
        <div className={pageStyles.landingContent}>
          <h1 className={`${textStyles.bandNameText} band-name-font`}>Temporary</h1>
          <h1 className={`${textStyles.bandNameText} band-name-font`}>Friends</h1>
        </div>
      </section>


      <section className={pageStyles.contentContainer}>
        <SectionTitle id="streaming" title="Streaming Platforms"/>
        <PlatformsSection links={ENV.PLATFORMS.streaming} onCopy={copyToClipboard} copiedLink={copiedLink}/>
        <p className={textStyles.noteText}>Note: Our music may be found on other platforms as well, but we didn't find them all. If you find us on a platform not listed here, please let us know!</p>

        <SectionTitle id="shows" title="Upcoming Shows"/>
        <UpcomingShowsSection shows={ENV.PLATFORMS.shows}/>

        <SectionTitle id="social" title="Social Media"/>
        <PlatformsSection links={ENV.PLATFORMS.social} onCopy={copyToClipboard} copiedLink={copiedLink} />

        <SectionTitle id="music" title="Our Music"/>
        <MusicSection music={EPS} />

        <SectionTitle id="bandmates" title="Band Members"/>
        <BandMembersSection members={ENV.BAND_MEMBERS} />

        <footer className={textStyles.footerText}>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</footer>
      </section>
    </div>
  );
}

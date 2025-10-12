"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import styled from 'styled-components';

import { COLOR_THEME, ENV, EPS, SECTIONS } from './config';
import {
  PlatformsSection,
  BandMembersSection,
  UpcomingShowsSection,
  SectionTitle,
  NavigationMenu,
  MusicSection
} from './sections';
import textStyles from '@/components/styles/globals/text.module.css';

const Note = styled.p.attrs({ className: textStyles.noteText })``;
const FooterText = styled.footer.attrs({ className: textStyles.footerText })``;

export default function BandWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  const landingRef = useRef(null);

  console.log("Background:", ENV.BACKGROUND_IMAGE);

  // Set mounted state to true when component mounts
  useEffect(() => {
    setMounted(true);

    // Add suppressHydrationWarning to body for NextJS
    if (typeof document !== 'undefined') {
      document.body.setAttribute('suppresshydrationwarning', 'true');
    }
  }, []);

  // Handle navigation
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

  // Copy to clipboard with feedback
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
    <div className={`${COLOR_THEME.bgPrimary} ${COLOR_THEME.textPrimary}`}>
      {/* Menu Toggle Button using Band Logo */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-4 z-50 rounded-full shadow-lg overflow-hidden"
        aria-label="Open menu"
        title="Menu"
      >
        <div className="w-12 h-12 bg-orange-600 flex items-center justify-center">
          {ENV.MENU_LOGO ? (
            <img
              src={ENV.MENU_LOGO}
              alt="Menu"
              className="w-12 h-12 object-cover"
            />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </div>
      </button>

      {/* Navigation Menu */}
      <NavigationMenu
        sections={[
          { id: 'landing', title: 'Home' },
          ...SECTIONS
        ]}
        onNavigate={handleNavigate}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Landing Page Section */}
      <section id="landing" ref={landingRef} className="h-screen relative">
        {/* Fallback background color if image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>

        {/* Background image with error handling */}
        {ENV.BACKGROUND_IMAGE && (
          <Image
            className="absolute inset-0 bg-center bg-cover z-10"
            src={ENV.BACKGROUND_IMAGE}
            layout="fill"
            objectFit="cover"
            alt="Band Background"
          ></Image>
        )}

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Main content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            {ENV.BAND_NAME}
          </h1>
        </div>
      </section>


      <div className="container mx-auto p-4">
        <SectionTitle id="streaming" title="Streaming Platforms"/>
        <PlatformsSection links={ENV.PLATFORMS.streaming} onCopy={copyToClipboard} copiedLink={copiedLink}/>
        <Note>Note: Our music may be found on other platforms as well, but we didn't find them all. If you find us on a platform not listed here, please let us know!</Note>

        <SectionTitle id="shows" title="Upcoming Shows"/>
        <UpcomingShowsSection shows={ENV.PLATFORMS.shows}/>
        <Note>Note: Date format is DD.MM YYYY</Note>

        <SectionTitle id="social" title="Social Media"/>
        <PlatformsSection links={ENV.PLATFORMS.social} onCopy={copyToClipboard} copiedLink={copiedLink} />

        <SectionTitle id="music" title="Our Music"/>
        <MusicSection music={EPS} />

        <SectionTitle id="bandmates" title="Band Members"/>
        <BandMembersSection members={ENV.BAND_MEMBERS} />

        <FooterText>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</FooterText>
      </div>
    </div>
  );
}
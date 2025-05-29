"use client";

import React, { useState, useEffect, useRef } from 'react';

import { COLOR_THEME, ENV, EPS, SECTIONS } from './config';
import {
  PlatformLink,
  BandMemberCard,
  EPCard,
  UpcomingShows,
  SectionHeader,
  NavigationMenu,
  MenuButton,
  Landing
} from './sections';
import {
  StreamingSectionFactory
} from './factories'

/**
 * Main Band Website Component
 */
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
      <MenuButton
        onClick={() => setMenuOpen(true)}
        menuLogo={ENV.MENU_LOGO}
      />

      {/* Navigation Menu */}
      <NavigationMenu 
        sections={SECTIONS}
        onNavigate={handleNavigate}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Landing Page Section */}
      <Landing
        landingRef={landingRef}
        backroundImage={ENV.BACKGROUND_IMAGE}
        bandName={ENV.BAND_NAME}
      />

      {/* Content Sections */}
      <div className="container mx-auto p-4">
        {/* Streaming Platforms Section */}
        <StreamingSectionFactory
          streamingList={ENV.PLATFORMS.streaming}
          copyAction = {copyToClipboard}
          copiedLink={copiedLink}
        />
        
        {/* Upcoming Shows Section */}
        <section id="shows" className="my-16">
          <UpcomingShows 
            shows={ENV.PLATFORMS.shows} 
            onCopy={copyToClipboard}
            copiedLink={copiedLink}
          />
          <p className={`${COLOR_THEME.textMuted} text-sm mt-4`}>
            Note: Date format is YYYY-MM-DD
          </p>
        </section>
        
        {/* Social Media Section */}
        <section id="social" className="my-16">
          <SectionHeader title="Social Media" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ENV.PLATFORMS.social.map(platform => (
              <PlatformLink 
                key={platform.id}
                id={platform.id}
                title={platform.title}
                url={platform.url}
                linkText={platform.linkText}
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
            ))}
          </div>
        </section>
        
        {/* EPs Section */}
        <section id="music" className="my-16">
          <SectionHeader title="Our Music" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EPS.map((ep) => (
              <EPCard key={ep.title} ep={ep} />
            ))}
          </div>
        </section>
        
        {/* Band Members Section */}
        <section id="bandmates" className="my-16">
          <SectionHeader title="Band Members" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENV.BAND_MEMBERS.map((member) => (
              <BandMemberCard key={`${member.firstName}-${member.lastName}`} member={member} />
            ))}
          </div>
        </section>
        
        <footer className="text-center py-6">
          <p>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
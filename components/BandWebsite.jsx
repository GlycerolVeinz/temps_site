"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';

import { COLOR_THEME, ENV, EPS, SECTIONS } from './config';
import {
  PlatformLink,
  BandMemberCard,
  EPCard,
  UpcomingShows,
  SectionHeader,
  NavigationMenu
} from './sections';

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
            // style={{ 
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center'
            // }}
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
      
      {/* Content Sections */}
      <div className="container mx-auto p-4">
        {/* Streaming Platforms Section */}
        <section id="streaming" className="my-16">
          <SectionHeader title="Streaming Platforms" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ENV.PLATFORMS.streaming.map(platform => (
              <PlatformLink 
                key={platform.id}
                id={platform.id}
                title={platform.title}
                url={platform.url}
                linkText={platform.linkText}
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
                hasWrongAssociation={platform.hasWrongAssociation}
              />
            ))}
          </div>
          <p className={`${COLOR_THEME.textMuted} text-sm mt-4`}>
            Note: Our music may be found on other platforms as well, but we didn't find them all.
            If you find us on a platform not listed here, please let us know!
          </p>
        </section>
        
        {/* Upcoming Shows Section */}
        <section id="shows" className="my-16">
          <UpcomingShows 
            shows={ENV.PLATFORMS.shows} 
            onCopy={copyToClipboard}
            copiedLink={copiedLink}
          />
          <p className={`${COLOR_THEME.textMuted} text-sm mt-4`}>
            Note: Date format is DD.MM YYYY
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
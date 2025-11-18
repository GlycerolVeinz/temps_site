"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import styled from 'styled-components';

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

const Note = styled.p.attrs({ className: textStyles.noteText })``;
const FooterText = styled.footer.attrs({ className: textStyles.footerText })``;
const PageContainer = styled.div.attrs({ className: pageStyles.pageContainer })``;
const MenuToggleButton = styled.button.attrs({ className: pageStyles.menuToggleButton })``;
const MenuToggleIcon = styled.div.attrs({ className: pageStyles.menuToggleIcon })``;
const MenuToggleLogo = styled.img.attrs({ className: pageStyles.menuToggleLogo })``;
const LandingSection = styled.section.attrs({ className: pageStyles.landingSection })``;
const BackgroundImage = styled(Image).attrs({ className: pageStyles.backgroundImage })``;
const BackgroundImageWrapper = styled.div.attrs({ className: pageStyles.backgroundImageWrapper })``;

const LandingContent = styled.div.attrs({ className: pageStyles.landingContent })``;
const BandName = styled.h1.attrs({ className: `${textStyles.bandNameText} band-name-font` })``;
const ContentSection = styled.section.attrs({ className: pageStyles.contentContainer })``;

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
    <PageContainer>
      <MenuToggleButton onClick={() => setMenuOpen(true)}>
        <MenuToggleIcon>
          {ENV.MENU_LOGO ? (
            <MenuToggleLogo
              src={ENV.MENU_LOGO}
              alt="Menu"
            />
          ) : (
            <Menu size={24} className={pageStyles.menuToggleFallbackIcon} />
          )}
        </MenuToggleIcon>
      </MenuToggleButton>

      <NavigationMenu
        sections={[
          { id: 'landing', title: 'Home' },
          ...SECTIONS
        ]}
        onNavigate={handleNavigate}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <LandingSection id="landing" ref={landingRef}>
        <BackgroundImageWrapper>
        <BackgroundImage
          src={isPortrait ? ENV.BACKGROUND_IMAGE_PORTRAIT : ENV.BACKGROUND_IMAGE_LANDSCAPE}
          layout="fill"
          objectFit="cover"
          alt="Band Background"
        />
        </BackgroundImageWrapper>
      
        <LandingContent>
          <BandName>Temporary</BandName>
          <BandName>Friends</BandName>
        </LandingContent>
      </LandingSection>


      <ContentSection>
        <SectionTitle id="streaming" title="Streaming Platforms"/>
        <PlatformsSection links={ENV.PLATFORMS.streaming} onCopy={copyToClipboard} copiedLink={copiedLink}/>
        <Note>Note: Our music may be found on other platforms as well, but we didn't find them all. If you find us on a platform not listed here, please let us know!</Note>

        <SectionTitle id="shows" title="Upcoming Shows"/>
        <UpcomingShowsSection shows={ENV.PLATFORMS.shows}/>

        <SectionTitle id="social" title="Social Media"/>
        <PlatformsSection links={ENV.PLATFORMS.social} onCopy={copyToClipboard} copiedLink={copiedLink} />

        <SectionTitle id="music" title="Our Music"/>
        <MusicSection music={EPS} />

        <SectionTitle id="bandmates" title="Band Members"/>
        <BandMembersSection members={ENV.BAND_MEMBERS} />

        <FooterText>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</FooterText>
      </ContentSection>
    </PageContainer>
  );
}

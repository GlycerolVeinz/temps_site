"use client";

import React, { useState, useEffect } from 'react';
import { Copy, Menu, X } from 'lucide-react';

/**
 * Color Theme Configuration
 * 
 * This object centralizes all color-related styling for the application.
 * Similar to a Constants class in Java, it provides a single source of truth
 * for all styling values that might need to be modified.
 * 
 * Current theme: Orange and Brown
 */
const COLOR_THEME = {
  // Background colors
  bgPrimary: "bg-stone-950",         // Main background (very dark brown/almost black)
  bgSecondary: "bg-stone-900",       // Section backgrounds, cards, etc. (dark brown)
  bgHighlight: "bg-orange-600",      // Active/selected elements (vibrant orange)

  // Text colors
  textPrimary: "text-stone-50",      // Main text (off-white with warm tone)
  textSecondary: "text-stone-300",   // Secondary, less emphasized text (light brown)
  textMuted: "text-stone-400",       // Footer, subtle text (medium light brown)
  textAccent: "text-orange-400",     // Links, emphasized text (bright orange)
  textSuccess: "text-green-400",     // Success messages (keeping green for clear feedback)

  // Border colors
  borderAccent: "border-orange-500", // Section dividers, highlights (orange borders)

  // Hover states
  hoverBg: "hover:bg-stone-800",     // Background hover (medium-dark brown)
  hoverBgAccent: "hover:bg-orange-700", // Accent buttons hover (darker orange)
  hoverUnderline: "hover:underline", // Text hover

  // Opacity layers
  overlayDark: "bg-stone-950 bg-opacity-80", // Dark overlay for text readability (very dark brown)
  cardBg: "bg-stone-900 bg-opacity-90",      // Semi-transparent card background (dark brown)
};

/**
 * Environment Configuration
 * 
 * Similar to application.properties in a Spring Boot application,
 * this object contains all external configuration values.
 */
const ENV = {
  // Band Information
  BAND_NAME: "Temporary Friends",
  
  // Image resources
  BACKGROUND_IMAGE: "/background.jpg",
  LOGO_IMAGE: "/logo.jpg",
  
  // Band members data
  BAND_MEMBERS: [
    {
      firstName: "John",
      lastName: "Doe",
      instrument: "Vocals/Guitar",
      instagram: "johndoe_music",
      contactEmail: "john@temporaryfriends.com",
      photo: "/john.jpg"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      instrument: "Bass",
      instagram: "janesmith_bass",
      contactEmail: "jane@temporaryfriends.com",
      photo: "/jane.jpg"
    },
    {
      firstName: "Mike",
      lastName: "Johnson",
      instrument: "Drums",
      instagram: "mikejdrums",
      contactEmail: "mike@temporaryfriends.com",
      photo: "/mike.jpg"
    },
    {
      firstName: "Sarah",
      lastName: "Williams",
      instrument: "Keyboards",
      instagram: "sarahw_keys",
      contactEmail: "sarah@temporaryfriends.com",
      photo: "/sarah.jpg"
    }
  ],
  
  // All platform links in a single data structure
  PLATFORMS: {
    // Streaming platforms
    streaming: [
      { 
        id: "spotify",
        title: "Spotify",
        url: "https://open.spotify.com/artist/temporaryfriends",
        linkText: "Listen on Spotify" 
      },
      { 
        id: "apple",
        title: "Apple Music",
        url: "https://music.apple.com/artist/temporaryfriends",
        linkText: "Listen on Apple Music" 
      },
      { 
        id: "youtube",
        title: "YouTube Music",
        url: "https://music.youtube.com/channel/temporaryfriends",
        linkText: "Listen on YouTube Music" 
      },
      { 
        id: "bandcamp",
        title: "Bandcamp",
        url: "https://temporaryfriends.bandcamp.com",
        linkText: "Listen on Bandcamp" 
      },
      { 
        id: "soundcloud",
        title: "SoundCloud",
        url: "https://soundcloud.com/temporaryfriends",
        linkText: "Listen on SoundCloud" 
      }
    ],
    
    // Social media platforms
    social: [
      { 
        id: "instagram",
        title: "Instagram",
        url: "https://instagram.com/temporaryfriends",
        linkText: "Follow us on Instagram" 
      },
      { 
        id: "twitter",
        title: "Twitter",
        url: "https://twitter.com/tempfriends",
        linkText: "Follow us on Twitter" 
      },
      { 
        id: "facebook",
        title: "Facebook",
        url: "https://facebook.com/temporaryfriends",
        linkText: "Follow us on Facebook" 
      },
      { 
        id: "tiktok",
        title: "TikTok",
        url: "https://tiktok.com/@temporaryfriends",
        linkText: "Follow us on TikTok" 
      }
    ]
  }
};

/**
 * EP Model
 * 
 * This is analogous to a data model class in Java.
 * Each EP represents an album/EP with its associated metadata.
 * 
 * @typedef {Object} EP
 * @property {string} title - The title of the EP
 * @property {string} cover - URL to the EP's cover image
 * @property {string[]} songs - Array of song titles on the EP
 */

/**
 * EP Repository
 * 
 * Similar to a data repository in Spring, this array contains all EP records.
 * @type {EP[]}
 */
const EPS = [
  {
    title: "First Impressions",
    cover: "/ep1-cover.jpg",
    songs: ["Hello World", "Digital Dreams", "Coding All Night", "Backend Blues"]
  },
  {
    title: "Sophomore Surge",
    cover: "/ep2-cover.jpg",
    songs: ["Frontend Feelings", "CSS Cascade", "React Revelations", "Final Build"]
  },
  {
    title: "Terminal Velocity",
    cover: "/ep3-cover.jpg",
    songs: ["Command Line", "Git Commit", "Deploy Day", "Runtime Error"]
  }
];

/**
 * Section Configuration
 * 
 * This data structure defines the navigation sections and their hierarchy.
 * It's generated automatically from the platforms and EPs data.
 */
const SECTIONS = [
  {
    id: "streaming",
    title: "Streaming Platforms",
    subsections: ENV.PLATFORMS.streaming.map(platform => ({ 
      id: platform.id, 
      title: platform.title 
    }))
  },
  {
    id: "social",
    title: "Social Media",
    subsections: ENV.PLATFORMS.social.map(platform => ({ 
      id: platform.id, 
      title: platform.title 
    }))
  },
  {
    id: "music",
    title: "Our Music",
    subsections: EPS.map(ep => ({ 
      id: `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`, 
      title: ep.title 
    }))
  },
  {
    id: "bandmates",
    title: "Band Members",
    subsections: ENV.BAND_MEMBERS.map(member => ({
      id: `member-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`,
      title: `${member.firstName} ${member.lastName}`
    }))
  }
];

/**
 * Platform Link Component
 * 
 * A reusable component that renders a platform link with a copy button.
 * This is similar to creating a helper class with specific functionality in Java.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.id - HTML ID for the element
 * @param {string} props.title - Display title
 * @param {string} props.url - URL to link to
 * @param {string} props.linkText - Text to display for the link
 * @param {function} props.onCopy - Function to call when copy button is clicked
 * @param {string} props.copiedLink - Currently copied link URL
 */
function BandMemberCard({ member }) {
  const memberId = `member-${member.firstName.toLowerCase()}-${member.lastName.toLowerCase()}`;
  
  return (
    <div 
      id={memberId}
      className={`${COLOR_THEME.cardBg} p-4 rounded-lg flex flex-col items-center`}
    >
      <div className="mb-3">
        <img 
          src={member.photo} 
          alt={`${member.firstName} ${member.lastName}`} 
          className="w-40 h-40 object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold text-center mb-1">{member.firstName} {member.lastName}</h3>
      <p className={`${COLOR_THEME.textSecondary} mb-3 text-center`}>{member.instrument}</p>
      <div className="flex flex-col w-full space-y-2">
        <a 
          href={`https://instagram.com/${member.instagram}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline} text-center`}
        >
          @{member.instagram}
        </a>
        <a 
          href={`mailto:${member.contactEmail}`} 
          className={`${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline} text-center`}
        >
          {member.contactEmail}
        </a>
      </div>
    </div>
  );
}
function PlatformLink({ id, title, url, linkText, onCopy, copiedLink }) {
  return (
    <div id={id} className={`${COLOR_THEME.cardBg} p-4 rounded-lg`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline}`}
        >
          {linkText}
        </a>
        <button 
          onClick={() => onCopy(url)}
          className={`p-2 bg-gray-700 rounded-md ${COLOR_THEME.hoverBgAccent}`}
        >
          <Copy size={16} />
        </button>
      </div>
      {copiedLink === url && (
        <span className={`${COLOR_THEME.textSuccess} text-sm mt-1 block`}>Link copied!</span>
      )}
    </div>
  );
}

/**
 * EP Card Component
 * 
 * A reusable component for displaying an EP with its cover and songs.
 * 
 * @param {Object} props - Component properties
 * @param {EP} props.ep - The EP object to display
 */
function EPCard({ ep }) {
  const epId = `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div 
      id={epId}
      className={`${COLOR_THEME.cardBg} p-4 rounded-lg`}
    >
      <div className="group relative mb-3">
        <img 
          src={ep.cover} 
          alt={`${ep.title} Cover`} 
          className="w-full h-64 object-cover rounded-md"
        />
        {/* Hover overlay with songs */}
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          <h4 className="text-lg font-bold mb-2">Songs:</h4>
          <ul className="text-center">
            {ep.songs.map((song, index) => (
              <li key={index} className="mb-1">{song}</li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="text-xl font-bold text-center">{ep.title}</h3>
    </div>
  );
}

/**
 * Navigation Subsection Component
 * 
 * A separate component for subsections to properly handle state
 */
function NavigationSubsection({ subsection, onSectionClick }) {
  const [isSubClicked, setIsSubClicked] = useState(false);
  
  const handleSubClick = (subsectionId) => {
    onSectionClick(subsectionId);
    // Flash the highlight effect
    setIsSubClicked(true);
    setTimeout(() => setIsSubClicked(false), 800); // Reset after 800ms
  };
  
  return (
    <div
      key={subsection.id}
      className={`p-2 pl-4 rounded-md cursor-pointer text-sm ${
        isSubClicked ? COLOR_THEME.bgHighlight : COLOR_THEME.hoverBg
      }`}
      onClick={() => handleSubClick(subsection.id)}
    >
      {subsection.title}
    </div>
  );
}

/**
 * Navigation Menu Section Component
 * 
 * Renders a single section in the navigation menu with its subsections.
 * 
 * @param {Object} props - Component properties
 * @param {Section} props.section - The section to render
 * @param {string} props.activeSection - ID of the currently active section
 * @param {Object} props.expandedSections - Object tracking which sections are expanded
 * @param {function} props.onSectionClick - Handler for section click
 * @param {function} props.onToggle - Handler for toggle section expansion
 */
function NavigationSection({ section, activeSection, expandedSections, onSectionClick, onToggle }) {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = (sectionId) => {
    onSectionClick(sectionId);
    // Flash the highlight effect
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 800); // Reset after 800ms
  };
  
  return (
    <div key={section.id} className="mb-2">
      <div 
        className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
          isClicked ? COLOR_THEME.bgHighlight : COLOR_THEME.hoverBg
        }`}
        onClick={() => {
          handleClick(section.id);
          onToggle(section.id);
        }}
      >
        <span>{section.title}</span>
        {section.subsections && section.subsections.length > 0 && (
          <span className="text-xs">{expandedSections[section.id] ? '▼' : '▶'}</span>
        )}
      </div>
      
      {/* Subsections */}
      {expandedSections[section.id] && section.subsections && (
        <div className="ml-4 mt-1 space-y-1">
          {section.subsections.map((subsection) => (
            <NavigationSubsection 
              key={subsection.id}
              subsection={subsection}
              onSectionClick={onSectionClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Section Header Component
 * 
 * Renders a standardized section header with title and styling.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.title - The section title
 */
function SectionHeader({ title }) {
  return (
    <h2 className={`text-3xl font-bold mb-6 border-b ${COLOR_THEME.borderAccent} pb-2`}>
      {title}
    </h2>
  );
}

/**
 * Band Website Component
 * 
 * This is the main component that orchestrates all other components.
 * Similar to a controller in Spring MVC that coordinates the application flow.
 */
export default function BandWebsite() {
  // State management (similar to fields in a Java class)
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [expandedSections, setExpandedSections] = useState({});
  const [copiedLink, setCopiedLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state to true when component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Scrolls to the specified section and updates active section state.
   * Similar to a service method in a Java service class.
   * 
   * @param {string} sectionId - ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      // Close mobile menu when a section is selected
      setMobileMenuOpen(false);
    }
  };

  /**
   * Toggles the expanded state of a section in the navigation menu.
   * 
   * @param {string} sectionId - ID of the section to toggle
   */
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  /**
   * Copies a URL to the clipboard and provides visual feedback.
   * 
   * @param {string} text - Text to copy to clipboard
   */
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedLink(text);
        setTimeout(() => setCopiedLink(""), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Reset copied link after timeout (similar to a cleanup method)
  useEffect(() => {
    if (copiedLink) {
      const timer = setTimeout(() => setCopiedLink(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedLink]);

  // Return null during server rendering
  if (!mounted && typeof window !== 'undefined') {
    return null;
  }

  // Main render method (similar to toString() in Java)
  return (
    <div className={`min-h-screen ${COLOR_THEME.bgPrimary} ${COLOR_THEME.textPrimary}`}>
      {/* Fixed Header with Menu Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-30 bg-black">
        <h1 className="text-xl font-bold">{ENV.BAND_NAME}</h1>
        <button 
          onClick={toggleMobileMenu}
          className={`p-2 rounded-md focus:outline-none ${COLOR_THEME.bgHighlight}`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Overlay that appears behind the mobile menu when open */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Navigation Sidebar - Responsive for mobile with slide-out */}
        <nav className={`
          fixed md:relative 
          top-14 md:top-0
          left-0 bottom-0
          w-64 
          ${COLOR_THEME.bgSecondary} 
          p-4 
          overflow-y-auto
          z-20
          transition-all duration-300 ease-in-out
          transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          md:sticky md:self-start md:h-screen
        `}>
          <div className="flex items-center justify-center mb-8">
            <img 
              src={ENV.LOGO_IMAGE} 
              alt={`${ENV.BAND_NAME} Logo`} 
              className="h-20 w-20 rounded-full"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-8 hidden md:block">{ENV.BAND_NAME}</h1>
          
          {/* Navigation Tree */}
          <div className="space-y-4">
            {SECTIONS.map((section) => (
              <NavigationSection 
                key={section.id}
                section={section}
                activeSection={activeSection}
                expandedSections={expandedSections}
                onSectionClick={scrollToSection}
                onToggle={toggleSection}
              />
            ))}
          </div>
        </nav>

        {/* Main Content Area - Pushed to the right when sidebar is open on desktop */}
        <main 
          className="flex-1 md:ml-0 p-4 md:p-8 relative min-h-screen"
          style={{
            backgroundImage: `url(${ENV.BACKGROUND_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for better text readability */}
          <div className={`absolute inset-0 ${COLOR_THEME.overlayDark}`}></div>
          
          {/* Content container */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-0 pt-8 md:pt-0">
            {/* Removed the header section */}

          {/* Streaming Platforms Section */}
          <section id="streaming" className="mb-10 md:mb-16">
            <SectionHeader title="Streaming Platforms" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ENV.PLATFORMS.streaming.map(platform => (
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

          {/* Social Media Section */}
          <section id="social" className="mb-10 md:mb-16">
            <SectionHeader title="Social Media" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <section id="music" className="mb-10 md:mb-16">
            <SectionHeader title="Our Music" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {EPS.map((ep) => (
                <EPCard key={ep.title} ep={ep} />
              ))}
            </div>
          </section>

            {/* Band Members Section */}
          <section id="bandmates" className="mb-10 md:mb-16">
            <SectionHeader title="Band Members" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {ENV.BAND_MEMBERS.map((member) => (
                <BandMemberCard key={`${member.firstName}-${member.lastName}`} member={member} />
              ))}
            </div>
          </section>

          <footer className={`text-center ${COLOR_THEME.textMuted} py-4 md:py-6`}>
            <p>© {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.</p>
          </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
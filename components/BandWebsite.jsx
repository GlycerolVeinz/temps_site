"use client";

import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';

/**
 * Color Theme Configuration
 * 
 * This object centralizes all color-related styling for the application.
 * Similar to a Constants class in Java, it provides a single source of truth
 * for all styling values that might need to be modified.
 * 
 * Current theme: Orange and Black
 */
const COLOR_THEME = {
  // Background colors
  bgPrimary: "bg-black",             // Main background (deep black)
  bgSecondary: "bg-gray-900",        // Section backgrounds, cards, etc. (near black)
  bgHighlight: "bg-orange-600",      // Active/selected elements (vibrant orange)

  // Text colors
  textPrimary: "text-white",         // Main text (white for contrast)
  textSecondary: "text-gray-300",    // Secondary, less emphasized text
  textMuted: "text-gray-400",        // Footer, subtle text
  textAccent: "text-orange-400",     // Links, emphasized text (bright orange)
  textSuccess: "text-green-400",     // Success messages (keeping green for clear feedback)

  // Border colors
  borderAccent: "border-orange-500", // Section dividers, highlights (orange borders)

  // Hover states
  hoverBg: "hover:bg-gray-800",      // Background hover (dark gray)
  hoverBgAccent: "hover:bg-orange-700", // Accent buttons hover (darker orange)
  hoverUnderline: "hover:underline", // Text hover

  // Opacity layers
  overlayDark: "bg-black bg-opacity-80", // Dark overlay for text readability (darker for contrast)
  cardBg: "bg-gray-900 bg-opacity-90",  // Semi-transparent card background (near black)
};

/**
 * Environment Configuration
 * 
 * Similar to application.properties in a Spring Boot application,
 * this object contains all external configuration values.
 */
const ENV = {
  // Streaming platforms
  SPOTIFY: "https://open.spotify.com/artist/temporaryfriends",
  APPLE_MUSIC: "https://music.apple.com/artist/temporaryfriends",
  YOUTUBE_MUSIC: "https://music.youtube.com/channel/temporaryfriends",
  BANDCAMP: "https://temporaryfriends.bandcamp.com",
  SOUNDCLOUD: "https://soundcloud.com/temporaryfriends",
  
  // Social media
  INSTAGRAM: "https://instagram.com/temporaryfriends",
  TWITTER: "https://twitter.com/tempfriends",
  FACEBOOK: "https://facebook.com/temporaryfriends",
  TIKTOK: "https://tiktok.com/@temporaryfriends",
  
  // Background image (replace with your actual image in Framer)
  BACKGROUND_IMAGE: "/background.jpg",
  
  // Logo image (replace with your actual image in Framer)
  LOGO_IMAGE: "/logo.jpg",
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
 * Section Model
 * 
 * @typedef {Object} Section
 * @property {string} id - Unique identifier for the section
 * @property {string} title - Display title for the section
 * @property {Object[]} subsections - Array of subsection objects
 */

/**
 * Navigation Structure
 * 
 * This represents the site's navigation hierarchy,
 * similar to a tree data structure in Java.
 * 
 * @type {Section[]}
 */
const SECTIONS = [
  {
    id: "streaming",
    title: "Streaming Platforms",
    subsections: [
      { id: "spotify", title: "Spotify" },
      { id: "apple", title: "Apple Music" },
      { id: "youtube", title: "YouTube Music" },
      { id: "bandcamp", title: "Bandcamp" },
      { id: "soundcloud", title: "SoundCloud" }
    ]
  },
  {
    id: "social",
    title: "Social Media",
    subsections: [
      { id: "instagram", title: "Instagram" },
      { id: "twitter", title: "Twitter" },
      { id: "facebook", title: "Facebook" },
      { id: "tiktok", title: "TikTok" }
    ]
  },
  {
    id: "music",
    title: "Our Music",
    subsections: EPS.map(ep => ({ id: `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`, title: ep.title }))
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
  return (
    <div key={section.id} className="mb-2">
      <div 
        className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
          activeSection === section.id ? COLOR_THEME.bgHighlight : COLOR_THEME.hoverBg
        }`}
        onClick={() => {
          onSectionClick(section.id);
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
            <div
              key={subsection.id}
              className={`p-2 pl-4 rounded-md cursor-pointer text-sm ${
                activeSection === subsection.id ? COLOR_THEME.bgHighlight : COLOR_THEME.hoverBg
              }`}
              onClick={() => onSectionClick(subsection.id)}
            >
              {subsection.title}
            </div>
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

  // Reset copied link after timeout (similar to a cleanup method)
  useEffect(() => {
    if (copiedLink) {
      const timer = setTimeout(() => setCopiedLink(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedLink]);

  // Main render method (similar to toString() in Java)
  return (
    <div className={`flex h-screen ${COLOR_THEME.bgPrimary} ${COLOR_THEME.textPrimary} overflow-hidden`}>
      {/* Navigation Sidebar */}
      <nav className={`w-64 ${COLOR_THEME.bgSecondary} p-4 overflow-y-auto`}>
        <div className="flex items-center justify-center mb-8">
          <img 
            src={ENV.LOGO_IMAGE} 
            alt="Temporary Friends Logo" 
            className="h-20 w-20 rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-8">Temporary Friends</h1>
        
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

      {/* Main Content Area */}
      <main 
        className="flex-1 overflow-y-auto p-8 relative"
        style={{
          backgroundImage: `url(${ENV.BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay for better text readability */}
        <div className={`absolute inset-0 ${COLOR_THEME.overlayDark}`}></div>
        
        {/* Content container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Temporary Friends</h1>
            <p className={`text-xl ${COLOR_THEME.textSecondary}`}>Official Band Website</p>
          </header>

          {/* Streaming Platforms Section */}
          <section id="streaming" className="mb-16">
            <SectionHeader title="Streaming Platforms" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PlatformLink 
                id="spotify"
                title="Spotify"
                url={ENV.SPOTIFY}
                linkText="Listen on Spotify"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="apple"
                title="Apple Music"
                url={ENV.APPLE_MUSIC}
                linkText="Listen on Apple Music"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="youtube"
                title="YouTube Music"
                url={ENV.YOUTUBE_MUSIC}
                linkText="Listen on YouTube Music"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="bandcamp"
                title="Bandcamp"
                url={ENV.BANDCAMP}
                linkText="Listen on Bandcamp"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="soundcloud"
                title="SoundCloud"
                url={ENV.SOUNDCLOUD}
                linkText="Listen on SoundCloud"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
            </div>
          </section>

          {/* Social Media Section */}
          <section id="social" className="mb-16">
            <SectionHeader title="Social Media" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PlatformLink 
                id="instagram"
                title="Instagram"
                url={ENV.INSTAGRAM}
                linkText="Follow us on Instagram"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="twitter"
                title="Twitter"
                url={ENV.TWITTER}
                linkText="Follow us on Twitter"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="facebook"
                title="Facebook"
                url={ENV.FACEBOOK}
                linkText="Follow us on Facebook"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
              
              <PlatformLink 
                id="tiktok"
                title="TikTok"
                url={ENV.TIKTOK}
                linkText="Follow us on TikTok"
                onCopy={copyToClipboard}
                copiedLink={copiedLink}
              />
            </div>
          </section>

          {/* EPs Section */}
          <section id="music" className="mb-16">
            <SectionHeader title="Our Music" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EPS.map((ep) => (
                <EPCard key={ep.title} ep={ep} />
              ))}
            </div>
          </section>

          <footer className={`text-center ${COLOR_THEME.textMuted} py-6`}>
            <p>© {new Date().getFullYear()} Temporary Friends. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
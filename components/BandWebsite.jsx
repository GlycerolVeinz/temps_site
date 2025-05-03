"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Copy, Menu, X } from 'lucide-react';
import Image from 'next/image';

/**
 * Color Theme Configuration
 */
const COLOR_THEME = {
  // Background colors
  bgPrimary: "bg-stone-950",         
  bgSecondary: "bg-stone-900",       
  bgHighlight: "bg-orange-600",      

  // Text colors
  textPrimary: "text-stone-50",      
  textSecondary: "text-stone-300",   
  textMuted: "text-stone-400",       
  textAccent: "text-orange-400",     
  textSuccess: "text-green-400",     

  // Border colors
  borderAccent: "border-orange-500", 

  // Hover states
  hoverBg: "hover:bg-stone-800",     
  hoverBgAccent: "hover:bg-orange-700", 
  hoverUnderline: "hover:underline", 

  // Opacity layers
  overlayDark: "bg-stone-950 bg-opacity-80", 
  cardBg: "bg-stone-900 bg-opacity-90",      
};

/**
 * Environment Configuration
 */
const ENV = {
  // Band Information
  BAND_NAME: "Temporary Friends",
  
  // Image resources - using absolute paths from the root
  BACKGROUND_IMAGE: "/TempsBackground.jpg", // Landing page background
  MENU_LOGO: "/TempsLogo.svg", // Menu button logo
  
  // Band members data with placeholder images
  BAND_MEMBERS: [
    {
      firstName: "John",
      lastName: "Doe",
      instrument: "Vocals/Guitar",
      instagram: "johndoe_music",
      contactEmail: "john@temporaryfriends.com",
      photo: "https://placehold.co/400x400/333/CCC?text=John"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      instrument: "Bass",
      instagram: "janesmith_bass",
      contactEmail: "jane@temporaryfriends.com",
      photo: "https://placehold.co/400x400/333/CCC?text=Jane"
    },
    {
      firstName: "Mike",
      lastName: "Johnson",
      instrument: "Drums",
      instagram: "mikejdrums",
      contactEmail: "mike@temporaryfriends.com",
      photo: "https://placehold.co/400x400/333/CCC?text=Mike"
    },
    {
      firstName: "Sarah",
      lastName: "Williams",
      instrument: "Keyboards",
      instagram: "sarahw_keys",
      contactEmail: "sarah@temporaryfriends.com",
      photo: "https://placehold.co/400x400/333/CCC?text=Sarah"
    }
  ],
  
  // All platform links in a single data structure
  PLATFORMS: {
    // Streaming platforms
    streaming: [
      { 
        id: "spotify",
        title: "Spotify",
        url: "https://open.spotify.com/artist/your-id-here",
        linkText: "Listen on Spotify",
        hasWrongAssociation: true
      },
      { 
        id: "apple",
        title: "Apple Music",
        url: "https://music.apple.com/artist/your-id-here",
        linkText: "Listen on Apple Music",
        hasWrongAssociation: false
      },
      { 
        id: "bandcamp",
        title: "Bandcamp",
        url: "https://temporaryfriends.bandcamp.com",
        linkText: "Listen on Bandcamp",
        hasWrongAssociation: false
      },
      { 
        id: "youtube",
        title: "YouTube Music",
        url: "https://music.youtube.com/channel/your-id-here",
        linkText: "Listen on YouTube Music",
        hasWrongAssociation: true
      },
      { 
        id: "soundcloud",
        title: "SoundCloud",
        url: "https://soundcloud.com/your-id-here",
        linkText: "Listen on SoundCloud",
        hasWrongAssociation: false
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
        url: "https://facebook.com/tempfriends",
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
 * EP Repository
 */
const EPS = [
  {
    title: "First Impressions",
    cover: "https://placehold.co/600x600/333/CCC?text=EP1",
    songs: ["Hello World", "Digital Dreams", "Coding All Night", "Backend Blues"]
  },
  {
    title: "Sophomore Surge",
    cover: "https://placehold.co/600x600/333/CCC?text=EP2",
    songs: ["Frontend Feelings", "CSS Cascade", "React Revelations", "Final Build"]
  },
  {
    title: "Terminal Velocity",
    cover: "https://placehold.co/600x600/333/CCC?text=EP3",
    songs: ["Command Line", "Git Commit", "Deploy Day", "Runtime Error"]
  }
];

/**
 * Section Configuration
 */
const SECTIONS = [
  {
    id: "streaming",
    title: "Streaming Platforms"
  },
  {
    id: "shows",
    title: "Upcoming Shows"
  },
  {
    id: "social",
    title: "Social Media"
  },
  {
    id: "music",
    title: "Our Music"
  },
  {
    id: "bandmates",
    title: "Band Members"
  }
];

/**
 * Platform Link Component
 */
function PlatformLink({ id, title, url, linkText, onCopy, copiedLink, hasWrongAssociation }) {
  return (
    <div id={id} className={`${COLOR_THEME.cardBg} p-4 rounded-lg`}>
      <h3 className="text-xl font-bold mb-2 flex items-center">
        {title}
        {hasWrongAssociation && (
          <span 
            className="ml-2 text-yellow-500 text-sm bg-yellow-900 px-2 py-1 rounded-full" 
            title="This platform may associate our music with other bands with similar names"
          >
            ⚠️ Name Clash
          </span>
        )}
      </h3>
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
      {hasWrongAssociation && (
        <p className="text-xs text-yellow-400 mt-2">
          Note: This platform may mix our music with other artists using the same name.
        </p>
      )}
    </div>
  );
}

/**
 * Band Member Card Component
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
          className={`${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline} text-center break-words`}
          title={member.contactEmail}
        >
          {member.contactEmail}
        </a>
      </div>
    </div>
  );
}

/**
 * EP Card Component
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
 * Upcoming Shows Component
 */
function UpcomingShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // For development, we'll use a mock API response
    // In production, replace with a real API call: 
    // fetch('https://api.your-backend.com/shows')
    
    // Simulate API delay
    const timer = setTimeout(() => {
      // Sample data - replace with real API response
      const mockData = [
        { 
          id: 1, 
          venue: "The Jazz Cafe", 
          location: "Prague, CZ", 
          date: "2025-05-15", 
          time: "8:00 PM",
          ticketLink: "https://example.com/tickets/1"
        },
        { 
          id: 2, 
          venue: "Rock Festival", 
          location: "Berlin, DE", 
          date: "2025-06-20", 
          time: "4:30 PM",
          ticketLink: null
        },
        { 
          id: 3, 
          venue: "Music Hall", 
          location: "Vienna, AT", 
          date: "2025-07-10", 
          time: "9:00 PM",
          ticketLink: null
        }
      ];
      
      setShows(mockData);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <div className="text-center p-4">Loading upcoming shows...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
  
  return (
    <div>
      <SectionHeader title="Upcoming Shows" />
      {shows.length === 0 ? (
        <p className="text-center">No upcoming shows at the moment. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {shows.map(show => (
            <div key={show.id} className={`${COLOR_THEME.cardBg} p-4 rounded-lg`}>
              <div className="flex justify-between flex-wrap">
                <div>
                  <h3 className="text-xl font-bold">{show.venue}</h3>
                  <p className={COLOR_THEME.textSecondary}>{show.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{new Date(show.date).toLocaleDateString()}</p>
                  <p>{show.time}</p>
                </div>
              </div>
              <div className="mt-4">
                {show.ticketLink ? (
                  <a 
                    href={show.ticketLink} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`inline-block px-4 py-2 rounded-md ${COLOR_THEME.bgHighlight} ${COLOR_THEME.hoverBgAccent}`}
                  >
                    Get Tickets
                  </a>
                ) : (
                  <span className={`inline-block px-4 py-2 rounded-md ${COLOR_THEME.bgSecondary}`}>
                    Tickets Available At Venue
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Spotify Player Component
 */
function SpotifyPlayer() {
  const [latestRelease, setLatestRelease] = useState(null);
  
  useEffect(() => {
    // In a real app, you would fetch this from your backend or Spotify API
    // For now, we'll use a mock response
    setLatestRelease({
      embedUrl: "https://open.spotify.com/embed/artist/your-artist-id-here"
    });
  }, []);
  
  if (!latestRelease) return null;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Listen to Our Latest Release</h3>
      <iframe
        src={latestRelease.embedUrl}
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className="rounded-lg"
      ></iframe>
    </div>
  );
}

/**
 * Instagram Feed Component
 * Keeping the component code but not using it in the main UI
 */
function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch from the Instagram API
    // For now, we'll use mock data
    const timer = setTimeout(() => {
      setPosts([
        { 
          id: '1', 
          imageUrl: 'https://placehold.co/600x600/333/CCC?text=Post1', 
          caption: 'Rehearsing for our upcoming show!' 
        },
        { 
          id: '2', 
          imageUrl: 'https://placehold.co/600x600/333/CCC?text=Post2', 
          caption: 'New EP dropping next month!' 
        },
        { 
          id: '3', 
          imageUrl: 'https://placehold.co/600x600/333/CCC?text=Post3', 
          caption: 'Behind the scenes at our photoshoot' 
        },
      ]);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <div className="text-center">Loading Instagram feed...</div>;
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Latest Instagram Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className={`${COLOR_THEME.cardBg} rounded-lg overflow-hidden`}>
            <img src={post.imageUrl} alt="Instagram post" className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-sm">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <a 
          href="https://instagram.com/temporaryfriends" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-block ${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline}`}
        >
          See more on Instagram
        </a>
      </div>
    </div>
  );
}

/**
 * Section Header Component
 */
function SectionHeader({ title }) {
  return (
    <h2 className={`text-3xl font-bold mb-6 border-b ${COLOR_THEME.borderAccent} pb-2`}>
      {title}
    </h2>
  );
}

/**
 * Navigation Menu Component
 */
function NavigationMenu({ sections, onNavigate, isOpen, onClose }) {
  return (
    <div 
      className={`
        fixed top-0 right-0 bottom-0 w-64 z-50 transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300 ease-in-out
        ${COLOR_THEME.bgSecondary} p-6
      `}
    >
      <div className="flex justify-end mb-6">
        <button 
          onClick={onClose}
          className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
        >
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4">
        {sections.map(section => (
          <div 
            key={section.id}
            className={`p-2 cursor-pointer ${COLOR_THEME.hoverBg} rounded-md`}
            onClick={() => onNavigate(section.id)}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Main Band Website Component
 */
export default function BandWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  const landingRef = useRef(null);
  
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
        <img 
          src={ENV.MENU_LOGO} 
          alt="Menu" 
          className="w-12 h-12 object-cover"
        />
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
        <Image 
          src={ENV.BACKGROUND_IMAGE}
          alt="Band Photo"
          layout="fill"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
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
          <SpotifyPlayer />
        </section>
        
        {/* Upcoming Shows Section */}
        <section id="shows" className="my-16">
          <UpcomingShows />
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
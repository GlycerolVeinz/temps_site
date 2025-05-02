"use client";

import React, { useState, useEffect } from 'react';
import { Copy, Menu, X } from 'lucide-react';

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
 * 
 * Updated with placeholder URLs that can be replaced with real image URLs
 * when deployed to Framer
 */
const ENV = {
  // Band Information
  BAND_NAME: "Temporary Friends",
  
  // Image resources - using placeholder URLs for development
  BACKGROUND_IMAGE: "https://placehold.co/1920x1080/333/CCC?text=Background",
  LOGO_IMAGE: "https://placehold.co/200x200/333/CCC?text=Logo",
  
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
 * 
 * Sample data - will be replaced with live data
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
    title: "Streaming Platforms",
    subsections: ENV.PLATFORMS.streaming.map(platform => ({ 
      id: platform.id, 
      title: platform.title 
    }))
  },
  {
    id: "shows",
    title: "Upcoming Shows",
    subsections: []
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
 * Fetches and displays upcoming show data
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
 * NEW COMPONENT: Spotify Player
 * Embeds a Spotify player for the latest release
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
 * NEW COMPONENT: Instagram Feed
 * Displays latest Instagram posts
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
 * NEW COMPONENT: Live Music Feed
 * Fetches data about latest streams and plays across platforms
 */
function LiveMusicFeed() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch aggregated music stats
    const timer = setTimeout(() => {
      setStats({
        totalStreams: "42,387",
        topTrack: "Digital Dreams",
        topCity: "Prague",
        monthlyListeners: "5,219",
        recentGrowth: "+12%"
      });
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <div className="text-center p-4">Loading stats...</div>;
  if (!stats) return null;
  
  return (
    <div className={`${COLOR_THEME.cardBg} p-6 rounded-lg mt-8`}>
      <h3 className="text-xl font-bold mb-4">Streaming Stats</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <p className={`${COLOR_THEME.textSecondary} text-sm`}>Total Streams</p>
          <p className="text-xl font-bold">{stats.totalStreams}</p>
        </div>
        <div>
          <p className={`${COLOR_THEME.textSecondary} text-sm`}>Monthly Listeners</p>
          <p className="text-xl font-bold">{stats.monthlyListeners}</p>
        </div>
        <div>
          <p className={`${COLOR_THEME.textSecondary} text-sm`}>Recent Growth</p>
          <p className="text-xl font-bold">{stats.recentGrowth}</p>
        </div>
        <div>
          <p className={`${COLOR_THEME.textSecondary} text-sm`}>Top Track</p>
          <p className="text-xl font-bold">{stats.topTrack}</p>
        </div>
        <div>
          <p className={`${COLOR_THEME.textSecondary} text-sm`}>Top City</p>
          <p className="text-xl font-bold">{stats.topCity}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Navigation Subsection Component
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
      className={`p-2 pl-4 rounded-md cursor-pointer text-sm transition-colors duration-300 ease-in-out ${
        isSubClicked ? COLOR_THEME.bgHighlight : COLOR_THEME.hoverBg
      }`}
      onClick={() => handleSubClick(subsection.id)}
    >
      {subsection.title}
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
 * Navigation Section Component
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
        className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out ${
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
 * Main Band Website Component
 * 
 * This is the main component that orchestrates all other components.
 */
export default function BandWebsite() {
  // State management
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
   */
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  /**
   * Copies a URL to the clipboard and provides visual feedback.
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

  // Reset copied link after timeout
  useEffect(() => {
    if (copiedLink) {
      const timer = setTimeout(() => setCopiedLink(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedLink]);

  // Set mounted state to true only after the component mounts
  // This is a crucial fix for the hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null during server-side rendering to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  // Main render method
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

        {/* Main Content Area */}
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
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-0 pt-16 md:pt-0">
            
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
                    hasWrongAssociation={platform.hasWrongAssociation}
                  />
                ))}
              </div>
              <SpotifyPlayer />
            </section>
            
            {/* Upcoming Shows Section */}
            <section id="shows" className="mb-10 md:mb-16">
              <UpcomingShows />
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
              <InstagramFeed />
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
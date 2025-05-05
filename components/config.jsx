/**
 * Color Theme Configuration
 */
export const COLOR_THEME = {
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
  export const ENV = {
    // Band Information
    BAND_NAME: "Temporary Friends",
    
    // Image resources - using absolute paths from the root
    BACKGROUND_IMAGE: "/group_images/background.png", // Landing page background
    MENU_LOGO: "group_images/logo.svg", // Menu button logo
    
    // Band members data with placeholder images
    BAND_MEMBERS: [
      {
        firstName: "Matouš",
        lastName: "Kostkan",
        instrument: "Vocals/Guitar",
        instagram: "m_kolecko",
        contactEmail: "matous.kostkan@gmail.com",
        photo: "https://placehold.co/400x400/333/CCC?text=Matouš"
      },
      {
        firstName: "Matty",
        lastName: "Safrankov",
        instrument: "drums/back-vocals",
        instagram: "janesmith_bass",
        contactEmail: "matvej.safrankov@gmail.com",
        photo: "https://placehold.co/400x400/333/CCC?text=Matty"
      },
      {
        firstName: "Jan",
        lastName: "Komárek",
        instrument: "Bass",
        instagram: "honzak0marek",
        contactEmail: "mike@temporaryfriends.com",
        photo: "https://placehold.co/400x400/333/CCC?text=Jan"
      },
      {
        firstName: "David",
        lastName: "DJ",
        instrument: "Guitar",
        instagram: "hhghjhhhhjh",
        contactEmail: "sarah@temporaryfriends.com",
        photo: "https://placehold.co/400x400/333/CCC?text=David"
      }
    ],
    
    // All platform links in a single data structure
    PLATFORMS: {
      // Streaming platforms
      streaming: [
        { 
          id: "spotify",
          title: "Spotify",
          url: "https://open.spotify.com/artist/1hDC3ZGGpJRbvbGenpUo3g?flow_ctx=fa75a858-1724-4476-8111-fd1897057200%3A1746250300",
          linkText: "Listen on Spotify",
          hasWrongAssociation: false
        },
        { 
          id: "apple",
          title: "Apple Music",
          url: "https://music.apple.com/us/artist/temporary-friends/1800877818",
          linkText: "Listen on Apple Music",
          hasWrongAssociation: false
        },
        { 
          id: "deezer",
          title: "Deezer",
          url: "https://www.deezer.com/en/album/723753291",
          linkText: "Listen on Deezer",
          hasWrongAssociation: true
        },
        { 
          id: "youtube",
          title: "YouTube Music",
          url: "https://music.youtube.com/playlist?list=OLAK5uy_k-hhXig_AYySIpPntUUk01KfRnimK82wE",
          linkText: "Listen on YouTube Music",
          hasWrongAssociation: true
        },
        { 
          id: "amazon",
          title: "AmazonMusic",
          url: "https://music.amazon.com/artists/B00QT13EBQ/temporary-friends",
          linkText: "Listen on Amazon Music",
          hasWrongAssociation: false
        },
        {
          id : "qobuz",
          title : "Qobuz",
          url : "https://www.qobuz.com/us-en/album/moved-me-temporary-friends/fvpwyo4ccutxa",
          linkText : "Listen on Qobuz",
          hasWrongAssociation: false
        }
      ],
      
      // Social media platforms
      social: [
        { 
          id: "instagram",
          title: "Instagram",
          url: "https://www.instagram.com/_temporaryfriends.band_/",
          linkText: "Follow us on Instagram" 
        },
        {
          id: "email",
          title: "Email",
          url: "mailto:tempfrensband@gmail.com",
          linkText: "Contact us via Email"
        }
      ],
      
      // Upcoming shows - extracted to match the social media structure
      shows: [
        { 
          id: 1, 
          venue: "Studentský majáles", 
          location: "Kampus Hybernská, Prague, CZ", 
          date: "01-05-2025", 
          time: "19:45",
          ticketLink: null,
          eventLink: "https://www.instagram.com/p/DI_jmGJI_4H/?img_index=1",
          googleMapsUrl: "https://maps.app.goo.gl/4bxTuvEnTxXdVkt69",
        }
      ]
    }
  };
  
  /**
   * EP Repository
   */
  export const EPS = [
    {
      title: "Moved Me",
      cover: "https://placehold.co/600x600/333/CCC?text=EP1",
      songs: ["Moved Me"]
    }
  ];
  
  /**
   * Section Configuration
   */
  export const SECTIONS = [
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

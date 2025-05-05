import React from 'react';
import { Copy, Menu, X } from 'lucide-react';
import { COLOR_THEME, ENV, EPS } from './config';

/**
 * Platform Link Component
 */
export function PlatformLink({ id, title, url, linkText, onCopy, copiedLink, hasWrongAssociation }) {
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
export function BandMemberCard({ member }) {
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
export function EPCard({ ep }) {
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
 * Show Card Component for Upcoming Shows
 */
export function ShowCard({ show, onCopy, copiedLink }) {
  return (
    <div key={show.id} className={`${COLOR_THEME.cardBg} p-4 rounded-lg`}>
      <div className="flex justify-between flex-wrap">
        <div>
          <h3 className="text-xl font-bold">
            <a 
              href={show.eventLink || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline}`}
              title="View event details"
            >
              {show.venue}
            </a>
          </h3>
          <p className={COLOR_THEME.textSecondary}>
            <a
              href={show.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${COLOR_THEME.textAccent} ${COLOR_THEME.hoverUnderline}`}
              title="Open in Google Maps"
            >
              {show.location}
            </a>
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold">{new Date(show.date).toLocaleDateString()}</p>
          <p>{show.time}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
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
        <button 
          onClick={() => onCopy(show.googleMapsUrl)}
          className={`p-2 bg-gray-700 rounded-md ${COLOR_THEME.hoverBgAccent} ml-2`}
          title="Copy map link"
        >
          <Copy size={16} />
        </button>
      </div>
      {copiedLink === show.googleMapsUrl && (
        <span className={`${COLOR_THEME.textSuccess} text-sm mt-1 block`}>Map link copied!</span>
      )}
    </div>
  );
}

/**
 * Upcoming Shows Component
 */
export function UpcomingShows({ shows, onCopy, copiedLink }) {
  if (!shows || shows.length === 0) {
    return (
      <div>
        <SectionHeader title="Upcoming Shows" />
        <p className="text-center">No upcoming shows at the moment. Check back soon!</p>
      </div>
    );
  }
  
  return (
    <div>
      <SectionHeader title="Upcoming Shows" />
      <div className="grid grid-cols-1 gap-4">
        {shows.map(show => (
          <ShowCard 
            key={show.id} 
            show={show} 
            onCopy={onCopy} 
            copiedLink={copiedLink} 
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Section Header Component
 */
export function SectionHeader({ title }) {
  return (
    <h2 className={`text-3xl font-bold mb-6 border-b ${COLOR_THEME.borderAccent} pb-2`}>
      {title}
    </h2>
  );
}

/**
 * Navigation Menu Component
 */
export function NavigationMenu({ sections, onNavigate, isOpen, onClose }) {
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
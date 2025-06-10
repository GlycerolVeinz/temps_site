import React from 'react';
import { Copy } from 'lucide-react';
import { COLOR_THEME } from '../config';

/**
 * Show Card Component
 * Displays information about an upcoming show
 */
export default function ShowCard({ show, onCopy, copiedLink }) {
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
          <p className="font-bold">{show.date}</p>
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
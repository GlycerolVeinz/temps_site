import React from 'react';
import ShowCard from './ShowCard';
import SectionHeader from './SectionHeader';

/**
 * Upcoming Shows Component
 * Displays a list of upcoming shows or a message if none
 */
export default function UpcomingShows({ shows, onCopy, copiedLink }) {
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
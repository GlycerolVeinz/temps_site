import React from 'react';
import ShowCard from './ShowCard';

/**
 * Upcoming Shows Component
 * Displays a list of upcoming shows or a message if none
 */
export default function UpcomingShows({ shows, onCopy, copiedLink }) {
  if (!shows || shows.length === 0) {
    return (
        <p className="text-center">No upcoming shows at the moment. Check back soon!</p>
    );
  }
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {shows.map(show => (
        <ShowCard 
          show={show} 
          onCopy={onCopy} 
          copiedLink={copiedLink} 
        />
      ))}
    </div>
  );
}
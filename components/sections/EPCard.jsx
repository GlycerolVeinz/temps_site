import React from 'react';
import { COLOR_THEME } from '../config';

/**
 * EP Card Component
 * Displays EP cover and song list with square images
 */
export default function EPCard({ ep }) {
  const epId = `ep-${ep.title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div 
      id={epId}
      className={`${COLOR_THEME.cardBg} p-4 rounded-lg`}
    >
      <div className="group relative mb-3">
        {/* Square container with aspect ratio */}
        <div className="aspect-square w-full overflow-hidden rounded-md">
          <img 
            src={ep.cover} 
            alt={`${ep.title} Cover`} 
            className="w-full h-full object-cover"
          />
        </div>
        
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
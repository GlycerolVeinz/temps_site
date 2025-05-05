import React from 'react';
import { COLOR_THEME } from '../config';

/**
 * Band Member Card Component
 * Displays information about a band member
 */
export default function BandMemberCard({ member }) {
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
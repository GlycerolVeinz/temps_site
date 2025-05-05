import React from 'react';
import { Copy } from 'lucide-react';
import { COLOR_THEME } from '../config';

/**
 * Platform Link Component
 * Displays a link to a platform with copy function
 */
export default function PlatformLink({ 
  id, 
  title, 
  url, 
  linkText, 
  onCopy, 
  copiedLink, 
  hasWrongAssociation 
}) {
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
import React from 'react';
import { X } from 'lucide-react';
import { COLOR_THEME } from '../config';

/**
 * Navigation Menu Component
 * Sliding sidebar navigation
 */
export default function NavigationMenu({ sections, onNavigate, isOpen, onClose }) {
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
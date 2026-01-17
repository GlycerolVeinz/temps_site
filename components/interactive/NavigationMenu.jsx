"use client";

import React from 'react';
import { X } from 'lucide-react';
import styles from '@/components/styles/module/NavigationMenu.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function NavigationMenu({ sections, onNavigate, isOpen, onClose }) {
  return (
    <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuHeader}>
        <button 
          onClick={onClose}
          className={`${buttonStyles.closeButton} ${textStyles.normalText}`}
        >
          <X size={24} />
        </button>
      </div>
      <div className={styles.menuItems}>
        {sections.map(section => (
          <div 
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`${styles.menuItem} ${textStyles.menuLinkText}`}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  );
}

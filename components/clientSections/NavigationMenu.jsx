import React from 'react';
import { X } from 'lucide-react';
import styles from '@/components/styles/module/NavigationMenu.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function NavigationMenu({ sections, onNavigate, isOpen, onClose }) {
  return (
    <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuHeader}>
        <button className={`${buttonStyles.closeButton} ${textStyles.normalText}`} onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      <div className={styles.menuItems}>
        {sections.map(section => (
          <div className={`${styles.menuItem} ${textStyles.menuLinkText}`}
            key={section.id}
            onClick={() => onNavigate(section.id)}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  );
}
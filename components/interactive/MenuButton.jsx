"use client";

import React from 'react';
import { useState } from 'react';
import { navigate } from '@/lib/navigation';
import { ENV, SECTIONS } from '@/lib/config';
import NavigationMenu from '@/components/interactive/NavigationMenu';
import styles from '@/components/styles/module/Page.module.css';
import textStyles from '@/components/styles/globals/text.module.css';

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const handleNavigate = (sectionId) => {
    navigate(sectionId);
    closeMenu();
  };

  return (
    <>
      <button onClick={openMenu} className={styles.menuToggleButton}>
        <div className={styles.menuToggleIcon}>
          {ENV.MENU_LOGO ? (
            <img 
              src={ENV.MENU_LOGO} 
              alt="Menu" 
              className={styles.menuToggleLogo} 
            />
          ) : (
            <span className={textStyles.bandNameText}>TF</span>
          )}
        </div>
      </button>

      <NavigationMenu
        sections={[{ id: 'landing', title: 'Home' }, ...SECTIONS]}
        onNavigate={handleNavigate}
        isOpen={menuOpen}
        onClose={closeMenu}
      />
    </>
  );
}

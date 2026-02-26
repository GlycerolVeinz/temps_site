'use client';

import { useState } from 'react';
import React from 'react';
import pageStyles from '@/components/styles/module/Page.module.css';
import { scrollToSection } from '@/lib/navigation';
import { ENV, SECTIONS } from '@/components/config';
import { NavigationMenu } from '@/components/sections';

export default function MenuButton() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNavigate = (sectionId) => {
        scrollToSection(sectionId);
        setMenuOpen(false);
    };

    return (
        <div>
            <button className={pageStyles.menuToggleButton} onClick={() => setMenuOpen(true)}>
                <div className={pageStyles.menuToggleIcon}>
                    {ENV.MENU_LOGO ? (
                        <img className={pageStyles.menuToggleLogo}
                            src={ENV.MENU_LOGO}
                            alt="Menu"
                        />
                    ) : (
                        <Menu size={24} className={pageStyles.menuToggleFallbackIcon} />
                    )}
                </div>
            </button>

            <NavigationMenu
                sections={[
                    { id: 'landing', title: 'Home' },
                    ...SECTIONS
                ]}
                onNavigate={handleNavigate}
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </div>
    )
}

import React from 'react';
import { X } from 'lucide-react';
import styled from 'styled-components';
import styles from '@/components/styles/module/NavigationMenu.module.css';
import buttonStyles from '@/components/styles/globals/button.module.css';

const MenuContainer = styled.div.attrs(({ isOpen }) => ({ 
  className: `${styles.menuContainer} ${isOpen ? styles.open : ''}` 
}))``;
const MenuHeader = styled.div.attrs({ className: styles.menuHeader })``;
const CloseButton = styled.button.attrs({ className: buttonStyles.closeButton })``;
const MenuItems = styled.div.attrs({ className: styles.menuItems })``;
const MenuItem = styled.div.attrs({ className: styles.menuItem })``;

/**
 * Navigation Menu Component
 * Sliding sidebar navigation
 */
export default function NavigationMenu({ sections, onNavigate, isOpen, onClose }) {
  return (
    <MenuContainer isOpen={isOpen}>
      <MenuHeader>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>
      </MenuHeader>
      <MenuItems>
        {sections.map(section => (
          <MenuItem 
            key={section.id}
            onClick={() => onNavigate(section.id)}
          >
            {section.title}
          </MenuItem>
        ))}
      </MenuItems>
    </MenuContainer>
  );
}
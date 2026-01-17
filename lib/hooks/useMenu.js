import { useState } from 'react';

export const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return {
    menuOpen,
    openMenu,
    closeMenu,
    toggleMenu
  };
};

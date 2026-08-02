'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { ENV } from '@/components/config';
import styles from '@/components/styles/module/NavigationMenu.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  // Focus trap and escape key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    // basic focus trap
    const focusableElements = drawerRef.current?.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const trapFocus = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };
    document.addEventListener('keydown', trapFocus);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen]);

  if (pathname?.startsWith('/studio')) return null;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          {ENV.MENU_LOGO ? (
              <img className={styles.logo} src={ENV.MENU_LOGO} alt="Menu" />
          ) : (
              <span className={styles.logoText}>TF</span>
          )}
        </Link>
        
        <nav className={styles.desktopNav}>
          {ROUTES.map((route) => (
            <Link 
              key={route.href} 
              href={route.href}
              className={styles.navLink}
              aria-current={pathname === route.href ? 'page' : undefined}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <button 
          ref={toggleRef}
          className={styles.mobileToggle}
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      <div 
        className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOpen : ''}`} 
        onClick={() => { setIsOpen(false); toggleRef.current?.focus(); }}
        inert={!isOpen ? true : undefined}
      />
      <div 
        ref={drawerRef}
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}
        inert={!isOpen ? true : undefined}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className={styles.drawerHeader}>
          <button 
            className={styles.closeButton}
            onClick={() => { setIsOpen(false); toggleRef.current?.focus(); }}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className={styles.drawerNav}>
          {ROUTES.map((route) => (
            <Link 
              key={route.href} 
              href={route.href}
              className={styles.drawerNavLink}
              aria-current={pathname === route.href ? 'page' : undefined}
              onClick={() => { setIsOpen(false); toggleRef.current?.focus(); }}
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
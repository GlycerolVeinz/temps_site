'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import layoutStyles from '@/components/styles/globals/layout.module.css';
import styles from '@/components/styles/module/Overlay.module.css';

export default function Overlay({ isOpen, onClose, children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Background scroll lock
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Focus trap and escape
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    const focusableElements = overlayRef.current?.querySelectorAll(
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
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', trapFocus);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className={styles.overlayBackdrop} 
      onClick={onClose}
    >
      <div 
        ref={overlayRef}
        className={styles.overlayContent} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close overlay"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
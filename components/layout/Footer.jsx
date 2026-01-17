import React from 'react';
import textStyles from '@/components/styles/globals/text.module.css';

export default function Footer({ bandName }) {  
  return (
    <footer className={textStyles.footerText}>
      ©2025 {bandName}. All rights reserved.
    </footer>
  );
}

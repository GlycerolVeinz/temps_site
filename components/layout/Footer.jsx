'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ENV } from '@/components/config';
import textStyles from '@/components/styles/globals/text.module.css';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;

  return (
    <footer className={textStyles.footerText} style={{ margin: 'var(--space-4) 0 var(--space-2)' }}>
      © {new Date().getFullYear()} {ENV.BAND_NAME}. All rights reserved.<br/>
      <span style={{ fontSize: 'var(--step--1)', color: 'var(--text-muted)', display: 'inline-flex', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
        <Link href='/studio' style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-hover)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Studio</Link>
      </span>
    </footer>
  );
}
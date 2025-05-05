import React from 'react';
import { COLOR_THEME } from '../config';

/**
 * Section Header Component
 * Displays a styled section title
 */
export default function SectionHeader({ title }) {
  return (
    <h2 className={`text-3xl font-bold mb-6 border-b ${COLOR_THEME.borderAccent} pb-2`}>
      {title}
    </h2>
  );
}
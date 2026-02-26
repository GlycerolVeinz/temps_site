"use client";

import { useState, useEffect } from 'react';

/**
 * React hook that tracks whether the viewport is in portrait orientation.
 *
 * @returns {boolean} `true` when the viewport is portrait.
 */
export function useOrientation() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches);

    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isPortrait;
}

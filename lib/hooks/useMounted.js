"use client";

import { useState, useEffect } from 'react';

/**
 * React hook that returns `true` once the component has mounted on the client.
 * Useful for gating client-only rendering to avoid hydration mismatches.
 *
 * @returns {boolean}
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof document !== 'undefined') {
      document.body.setAttribute('suppresshydrationwarning', 'true');
    }
  }, []);

  return mounted;
}

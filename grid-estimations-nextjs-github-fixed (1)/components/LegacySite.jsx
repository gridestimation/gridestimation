'use client';

import { useEffect } from 'react';

export default function LegacySite() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const script = document.createElement('script');
    script.type = 'module';
    script.src = `${basePath}/assets/legacy-app.js`;
    script.dataset.legacyGridSite = 'true';
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}

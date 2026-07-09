import { useEffect } from 'react';
import { enableOverlays } from '@sanity/overlays';

export default function VisualEditing() {
  useEffect(() => {
    // Only enable in preview mode
    const isPreview = document.cookie.includes('preview=true');
    if (!isPreview) return;

    // Enable the visual editing overlays
    const disable = enableOverlays({
      history: 'replace',
    });

    return () => disable();
  }, []);

  return null;
}

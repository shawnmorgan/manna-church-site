import {useEffect} from 'react';
import {enableOverlays} from '@sanity/visual-editing';

export default function VisualEditing() {
  useEffect(() => {
    // Only enable in preview mode
    const isPreview = document.cookie.includes('preview=true');
    if (!isPreview) return;

    // Enable the overlays for click-to-edit
    const disable = enableOverlays({
      history: 'replace',
    });

    return () => {
      disable();
    };
  }, []);

  return null;
}

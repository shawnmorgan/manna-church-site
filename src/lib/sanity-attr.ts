/**
 * Builds a `data-sanity` attribute string for Presentation / visual-editing overlays.
 *
 * Rendering a Sanity field value as visible text already makes it click-to-edit
 * (via stega-encoded characters). This helper adds explicit overlay targets for
 * things that can't carry stega — images, buttons, whole cards/sections — so the
 * Presentation tool can highlight them and jump to the exact field in the studio.
 *
 * Usage in a React island:
 *   <img data-sanity={sanityAttr(content._id, content._type, 'appMockupImage')} ... />
 *   <h2 data-sanity={sanityAttr(content._id, content._type, `threeThingsCards[_key=="${key}"].title`)} />
 */
import { createDataAttribute } from '@sanity/visual-editing';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID as string;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET as string;

// The embedded studio lives at /studio on the same origin.
const baseUrl = '/studio';

export function sanityAttr(
  id?: string,
  type?: string,
  path?: string,
): string | undefined {
  if (!id || !type || !projectId || !dataset) return undefined;

  // In "drafts" perspective Sanity may return a `drafts.` prefixed id; the
  // overlay resolver expects the published document id.
  const cleanId = id.replace(/^drafts\./, '');

  return createDataAttribute({
    projectId,
    dataset,
    baseUrl,
    id: cleanId,
    type,
    path: path ?? '',
  }).toString();
}

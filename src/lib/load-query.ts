import type { ClientPerspective, QueryParams } from '@sanity/client';
import { sanityClient } from 'sanity:client';

const token = import.meta.env.SANITY_API_READ_TOKEN;

function parsePerspective(cookie: string | undefined): ClientPerspective | undefined {
  if (!cookie) return undefined;
  try {
    const decoded = decodeURIComponent(cookie);
    // Handle both string and object perspectives
    if (decoded.startsWith('{')) {
      return JSON.parse(decoded) as ClientPerspective;
    }
    return decoded as ClientPerspective;
  } catch {
    return undefined;
  }
}

export async function loadQuery<QueryResponse>({
  query,
  params,
  perspectiveCookie = undefined,
}: {
  query: string;
  params?: QueryParams;
  perspectiveCookie?: string | undefined;
}) {
  const draftMode = perspectiveCookie ? true : false;

  const perspective: ClientPerspective = draftMode
    ? (parsePerspective(perspectiveCookie) ?? 'drafts')
    : 'published';

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: draftMode ? 'withKeyArraySelector' : false,
      stega: draftMode,
      ...(draftMode ? { token } : {}),
    },
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}

export function getDraftModeProps(cookies: any) {
  const perspectiveCookieName = '__sanity_preview_perspective';
  return {
    perspectiveCookie: cookies.get(perspectiveCookieName)?.value ?? undefined,
  };
}

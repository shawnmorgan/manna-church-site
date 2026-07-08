import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type {QueryParams} from '@sanity/client';

// Client for published content (CDN-enabled)
export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  perspective: 'published',
});

// Client for draft/preview content (no CDN)
export const previewClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  perspective: 'previewDrafts',
  token: import.meta.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper to get the right client based on preview mode
export function getClient(preview: boolean = false) {
  return preview ? previewClient : sanityClient;
}

// Helper function to fetch with optional preview
export async function sanityFetch<T = any>({
  query,
  params = {},
  preview = false,
}: {
  query: string;
  params?: QueryParams;
  preview?: boolean;
}): Promise<T> {
  const client = getClient(preview);
  return client.fetch<T>(query, params);
}

// Types for Sanity documents
export interface Location {
  _id: string;
  _type: 'location';
  name: string;
  city: string;
  state: string;
  type: 'multi-site' | 'single-site';
  image?: {
    asset: {
      _ref: string;
    };
  };
  address?: string;
  serviceTimes?: string[];
  pastor?: string;
  description?: string;
}

export interface SiteContent {
  _id: string;
  _type: 'siteContent';
  heroTitle: string;
  heroSubtitle: string;
  heroBackgroundImage?: {
    asset: {
      _ref: string;
    };
  };
  threeThings: {
    title: string;
    description: string;
    cards: Array<{
      eyebrow: string;
      title: string;
      body: string;
    }>;
  };
  appSection: {
    title: string;
    subtitle: string;
    features: string[];
    mockupImage?: {
      asset: {
        _ref: string;
      };
    };
  };
}

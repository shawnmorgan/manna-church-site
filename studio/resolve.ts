import { defineLocations } from 'sanity/presentation';

export const resolve = {
  locations: {
    siteContent: defineLocations({
      select: {
        title: 'title',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Homepage',
            href: '/',
          },
        ],
      }),
    }),
    location: defineLocations({
      select: {
        title: 'name',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Location',
            href: `/sites/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
};

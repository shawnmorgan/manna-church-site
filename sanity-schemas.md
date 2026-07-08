# Sanity CMS Schema Documentation

## Overview
This document outlines the Sanity schemas needed for the Manna Church website.

## Schemas

### 1. Location Schema
```javascript
export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Location Type',
      type: 'string',
      options: {
        list: [
          {title: 'Multi-site', value: 'multi-site'},
          {title: 'Single-site', value: 'single-site'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'pastor',
      title: 'Lead Pastor',
      type: 'string'
    },
    {
      name: 'serviceTimes',
      title: 'Service Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'day', type: 'string', title: 'Day'},
            {name: 'time', type: 'string', title: 'Time'}
          ]
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

### 2. Site Content Schema (Homepage)
```javascript
export default {
  name: 'siteContent',
  title: 'Site Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'threeThings',
      title: 'Three Things Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text'
        },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'eyebrow', type: 'string', title: 'Eyebrow'},
                {name: 'title', type: 'string', title: 'Title'},
                {name: 'body', type: 'text', title: 'Body'}
              ]
            }
          ],
          validation: Rule => Rule.length(3)
        }
      ]
    },
    {
      name: 'appSection',
      title: 'App Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text'
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{type: 'string'}],
          validation: Rule => Rule.length(4)
        },
        {
          name: 'mockupImage',
          title: 'Mockup Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ]
}
```

## Setup Instructions

1. Create a new Sanity project:
```bash
npm create sanity@latest
```

2. Add these schemas to your `schemas` directory

3. Configure environment variables in `.env`:
```
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
```

4. Deploy the Sanity studio:
```bash
sanity deploy
```

## Querying from Astro

Example query for homepage:
```typescript
import { sanityClient } from '../lib/sanity';

const homeContent = await sanityClient.fetch(`
  *[_type == "siteContent"][0] {
    heroTitle,
    heroSubtitle,
    "heroBackgroundImage": heroBackgroundImage.asset->url,
    threeThings,
    appSection
  }
`);
```

Example query for locations:
```typescript
const locations = await sanityClient.fetch(`
  *[_type == "location"] | order(name asc) {
    _id,
    name,
    slug,
    type,
    city,
    state,
    "image": featuredImage.asset->url
  }
`);
```

Example query for single location page:
```typescript
const location = await sanityClient.fetch(`
  *[_type == "location" && slug.current == $slug][0] {
    name,
    city,
    state,
    heroTitle,
    heroSubtitle,
    serviceTimes,
    pastor,
    address,
    phone,
    "backgroundImage": featuredImage.asset->url
  }
`, { slug });
```

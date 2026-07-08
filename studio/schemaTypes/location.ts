import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  icon: PinIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Basic Info
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'e.g., "Manna Fayetteville" or "Manna Highpoint"',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Click "Generate" to create from location name',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'type',
      title: 'Location Type',
      type: 'string',
      options: {
        list: [
          {title: 'Multi-site', value: 'multi-site'},
          {title: 'Single-site', value: 'single-site'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),

    // Geographic Info
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'Two-letter state code (e.g., "NC", "FL")',
      validation: (Rule) => Rule.required().length(2),
      group: 'details',
    }),
    defineField({
      name: 'address',
      title: 'Full Address',
      type: 'text',
      rows: 3,
      description: 'Complete street address for Google Maps',
      group: 'details',
    }),

    // Contact Info
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Format: (XXX) XXX-XXXX',
      group: 'details',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Location-specific email if different from main',
      group: 'details',
    }),
    defineField({
      name: 'pastor',
      title: 'Lead Pastor',
      type: 'string',
      description: 'Full name of the lead pastor',
      group: 'details',
    }),

    // Service Times
    defineField({
      name: 'serviceTimes',
      title: 'Service Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              type: 'string',
              title: 'Day of Week',
              options: {
                list: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
            },
            {
              name: 'time',
              type: 'string',
              title: 'Time',
              description: 'e.g., "9:00 AM" or "5:30 PM"',
            },
            {
              name: 'note',
              type: 'string',
              title: 'Additional Note',
              description: 'Optional: e.g., "Kids Ministry Available"',
            },
          ],
          preview: {
            select: {
              day: 'day',
              time: 'time',
              note: 'note',
            },
            prepare({day, time, note}) {
              return {
                title: `${day} at ${time}`,
                subtitle: note || '',
              }
            },
          },
        },
      ],
      group: 'details',
    }),

    // Visual Content
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for location card (recommended: 800x600px)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the image for accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      description: 'Large banner image for location page (recommended: 1920x1080px)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
      group: 'content',
    }),

    // Hero Content
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Large headline on location page (defaults to location name if empty)',
      group: 'content',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Supporting text under hero title',
      group: 'content',
    }),

    // Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Brief description of this location and its community',
      group: 'content',
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom page title for search engines (defaults to location name)',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines (155 characters max)',
      validation: (Rule) => Rule.max(155),
      group: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      city: 'city',
      state: 'state',
      media: 'featuredImage',
      type: 'type',
    },
    prepare({title, city, state, media, type}) {
      return {
        title: title,
        subtitle: `${city}, ${state} • ${type}`,
        media: media,
      }
    },
  },
})

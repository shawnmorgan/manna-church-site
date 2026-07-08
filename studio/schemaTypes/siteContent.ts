import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'siteContent',
  title: 'Homepage Content',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
      default: true,
    },
    {
      name: 'video',
      title: 'Video Section',
    },
    {
      name: 'threeThings',
      title: 'Three Things',
    },
    {
      name: 'app',
      title: 'App Section',
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline (e.g., "One Church, Multiple Locations")',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Supporting text under the main headline',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      description: 'Large background image (recommended: 1920x1080px)',
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
      group: 'hero',
    }),
    defineField({
      name: 'heroLogo',
      title: 'Hero Logo',
      type: 'image',
      description: 'Optional logo to display in hero section',
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
      group: 'hero',
    }),
    defineField({
      name: 'heroCollageImages',
      title: 'Hero Collage Images',
      type: 'array',
      description: '💡 Tip: Drag & drop multiple images at once or click "Select" to upload in batch. 12 images recommended for best effect.',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Brief description of the image for accessibility',
            },
          ],
        },
      ],
      group: 'hero',
    }),

    // Video Section
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'file',
      description: 'Upload video file or use external URL',
      group: 'video',
    }),
    defineField({
      name: 'videoText',
      title: 'Video Description Text',
      type: 'text',
      rows: 4,
      description: 'Text displayed below the video',
      group: 'video',
    }),

    // Three Things Section
    defineField({
      name: 'threeThingsTitle',
      title: 'Section Title',
      type: 'string',
      description: 'e.g., "We Do Three Things"',
      initialValue: 'We Do Three Things',
      group: 'threeThings',
    }),
    defineField({
      name: 'threeThingsDescription',
      title: 'Section Description',
      type: 'text',
      rows: 3,
      description: 'Intro text above the three cards',
      group: 'threeThings',
    }),
    defineField({
      name: 'threeThingsCards',
      title: 'Three Cards',
      type: 'array',
      validation: (Rule) => Rule.required().length(3),
      description: 'Exactly 3 cards required',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'eyebrow',
              type: 'string',
              title: 'Eyebrow Label',
              description: 'Small label above title (e.g., "ONE")',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Card Title',
              description: 'Main headline for this card',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'body',
              type: 'text',
              title: 'Body Text',
              rows: 4,
              description: 'Detailed description',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon/Image',
              description: 'Optional icon or image for the card',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              eyebrow: 'eyebrow',
              title: 'title',
              body: 'body',
              media: 'icon',
            },
            prepare({eyebrow, title, body, media}) {
              return {
                title: `${eyebrow}: ${title}`,
                subtitle: body,
                media: media,
              }
            },
          },
        },
      ],
      group: 'threeThings',
    }),

    // App Section
    defineField({
      name: 'appTitle',
      title: 'App Section Title',
      type: 'string',
      description: 'e.g., "Download the Manna App"',
      initialValue: 'Download the Manna App',
      group: 'app',
    }),
    defineField({
      name: 'appSubtitle',
      title: 'App Section Subtitle',
      type: 'text',
      rows: 2,
      description: 'Supporting text for the app section',
      group: 'app',
    }),
    defineField({
      name: 'appFeatures',
      title: 'App Features',
      type: 'array',
      validation: (Rule) => Rule.required().min(3).max(6),
      description: 'List of key app features (3-6 items)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'feature',
              type: 'string',
              title: 'Feature',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'feature',
            },
          },
        },
      ],
      group: 'app',
    }),
    defineField({
      name: 'appMockupImage',
      title: 'App Mockup Image',
      type: 'image',
      description: 'Phone mockup showing the app (recommended: 800x1600px)',
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
      group: 'app',
    }),
    defineField({
      name: 'appStoreUrl',
      title: 'App Store URL',
      type: 'url',
      description: 'Link to iOS App Store',
      group: 'app',
    }),
    defineField({
      name: 'playStoreUrl',
      title: 'Play Store URL',
      type: 'url',
      description: 'Link to Google Play Store',
      group: 'app',
    }),
  ],

  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({title}) {
      return {
        title: 'Homepage',
        subtitle: title || 'Edit homepage content',
      }
    },
  },
})

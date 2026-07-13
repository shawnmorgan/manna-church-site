import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'general',
      title: 'General',
      default: true,
    },
    {
      name: 'social',
      title: 'Social Media',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    // General Settings
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Name of the website',
      initialValue: 'Manna Church',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      description: 'Primary URL (e.g., https://mannachurch.com)',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Main logo (SVG recommended for best quality)',
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
      group: 'general',
    }),
    defineField({
      name: 'logoWhite',
      title: 'White Logo',
      type: 'image',
      description: 'White version of logo for dark backgrounds',
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
      group: 'general',
    }),
    defineField({
      name: 'mainPhone',
      title: 'Main Phone Number',
      type: 'string',
      description: 'Primary contact phone',
      group: 'general',
    }),
    defineField({
      name: 'mainEmail',
      title: 'Main Email',
      type: 'string',
      description: 'Primary contact email',
      group: 'general',
    }),

    // Social Media
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X URL',
      type: 'url',
      group: 'social',
    }),

    // Footer
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2,
      description: 'Text displayed in footer',
      group: 'footer',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'e.g., "© 2024 Manna Church. All rights reserved."',
      initialValue: `© ${new Date().getFullYear()} Manna Church. All rights reserved.`,
      group: 'footer',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      description: 'Additional links in footer',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Link Text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              url: 'url',
            },
            prepare({title, url}) {
              return {
                title: title,
                subtitle: url,
              }
            },
          },
        },
      ],
      group: 'footer',
    }),
  ],

  preview: {
    select: {
      title: 'siteName',
    },
    prepare({title}) {
      return {
        title: 'Site Settings',
        subtitle: title || 'Configure site-wide settings',
      }
    },
  },
})

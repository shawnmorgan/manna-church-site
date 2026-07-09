import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {presentationTool} from '@sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

// Define the locations that can be previewed
export const PREVIEWABLE_DOCUMENT_TYPES = ['siteContent', 'location']

export default defineConfig({
  name: 'default',
  title: 'Manna Church',

  projectId: '0o0tjt6s',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        initial: 'https://new26.manna.church',
        previewMode: {
          enable: '/api/preview',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Form components configuration for better editing experience
  form: {
    // Optimize the form experience
    image: {
      directUploads: true,
    },
  },
})

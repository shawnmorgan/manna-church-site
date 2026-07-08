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

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        // Preview URL for local development
        draftMode: {
          enable: '/api/draft',
        },
        // Use the preview URL from environment variable or default to localhost
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4321',
        previewMode: {
          enable: '/api/preview',
        },
      },
      resolve: {
        // Configure how documents are previewed
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: `_type == "siteContent"`,
          },
          {
            route: '/sites/:slug',
            filter: `_type == "location" && slug.current == $slug`,
          },
        ]),
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

// Helper function to define document routes
function defineDocuments(docs: Array<{route: string; filter: string}>) {
  return docs.map((doc) => ({
    ...doc,
    options: {
      cache: 'no-cache' as const,
    },
  }))
}

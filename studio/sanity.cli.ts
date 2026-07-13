import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'manna-church',
  /**
   * Auto-updates are disabled so the deployed studio runs the exact versions
   * bundled at build time (sanity v3 + @sanity/presentation v1). With
   * auto-updates on, the runtime loaded Sanity v4 core modules from
   * modules.sanity-cdn.com, which broke the v3-configured Presentation tool.
   */
  autoUpdates: false,
})

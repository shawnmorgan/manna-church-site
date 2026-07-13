import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'manna-church',
  /**
   * Auto-updates are disabled so the deployed studio runs the exact versions
   * bundled at build time (sanity v6). With auto-updates on, the runtime
   * loads core modules from modules.sanity-cdn.com, which can drift ahead of
   * the bundled config and break the Presentation tool / visual-editing
   * comlink handshake with the frontend's @sanity/visual-editing version.
   */
  deployment: {autoUpdates: false},
})

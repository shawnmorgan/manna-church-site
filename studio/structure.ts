import {StructureBuilder} from 'sanity/structure'
import {HomeIcon, PinIcon, CogIcon, ImagesIcon} from '@sanity/icons'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Homepage (singleton)
      S.listItem()
        .title('Homepage')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('siteContent')
            .documentId('homepage')
            .title('Homepage Content')
        ),

      // Divider
      S.divider(),

      // Locations
      S.listItem()
        .title('Locations')
        .icon(PinIcon)
        .child(
          S.documentTypeList('location')
            .title('All Locations')
            .filter('_type == "location"')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('location')
            )
        ),

      // Divider
      S.divider(),

      // Media Library
      S.listItem()
        .title('Media Library')
        .icon(ImagesIcon)
        .child(
          S.documentTypeList('sanity.imageAsset')
            .title('All Images')
            .filter('_type == "sanity.imageAsset"')
        ),

      // Divider
      S.divider(),

      // Settings (singleton)
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),

      // All other document types (filtered out from main list)
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteContent', 'location', 'siteSettings'].includes(
            listItem.getId() || ''
          )
      ),
    ])

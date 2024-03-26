import { RxLayers } from 'react-icons/rx';
import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
} from 'sanity/structure';

import OGPreview from '~/sanity/components/OGPreview/OGPreview';
import { resolveOGUrl } from '~/sanity/utils/resolveOGUrl';

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Singleton, home page curation
      // S.documentListItem()
      //   .schemaType('home')
      //   .icon(Home)
      //   .id('home')
      //   .title('Home'),

      // Document lists
      S.documentTypeListItem('Stock').title('Stock').icon(RxLayers),
      S.divider(),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType, documentId },
) => {
  const OGPreviewView = S.view
    .component(OGPreview)
    .options({
      url: resolveOGUrl(documentId),
    })
    .title('OG Preview');

  switch (schemaType) {
    case `home`:
      return S.document().views([S.view.form()]);
    case `record`:
      return S.document().views([S.view.form(), OGPreviewView]);
    default:
      return S.document().views([S.view.form()]);
  }
};
